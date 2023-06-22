//route to show  all  lab's detail

import React, { useState } from "react";
import { Container } from "@mui/material";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { IconButton, Button, Paper, MenuList, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { deleteLab as deleteLabSlice } from "../store/labSlice";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import LabForm from "../component/labForm";

const LabDetail = ({ route }) => {
  // declare all hooks that we need
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //get isloading state
  const isLoading = useSelector((state) => state.isLoading);
  const [showMenuList, setShowMenuList] = useState(false);
  const _id = location.state._id;

  //get lab list from  reducer state
  const [lab, setLab] = useState(
    useSelector((state) => {
      return state.labList.filter((item) => item._id === _id);
    }, shallowEqual)
  );

  const start_date = new Date(lab[0].start_date);
  const end_date = new Date(lab[0].end_date);
  const description = lab[0].description;
  const technology = lab[0].technology;
  const title = lab[0].title;

  const deleteLab = (_id) => {
    //delete the lab by id and navigate to lab menu

    dispatch(deleteLabSlice(_id, navigate));
  };

  return (
    <>
      {
        //check if the page is loading else return the hole detail of lab

        isLoading ? (
          <CircularProgress />
        ) : (
          <Container maxWidth="md" sx={{ mb: 25, position: "relative" }}>
            <IconButton
              style={{ position: "absolute", top: 0, right: 0, fontSize: 18 }}
              aria-label="settings"
              onClick={() => setShowMenuList(!showMenuList)}
            >
              More
              <MoreVertIcon />
            </IconButton>
            <Paper style={{ position: "absolute", right: 0, top: 35 }}>
              <MenuList
                style={
                  showMenuList ? { display: "block" } : { display: "none" }
                }
              >
                <MenuItem
                  onClick={() =>
                    navigate("/labAction", {
                      state: {
                        _id,
                        title,
                        end_date,
                        start_date,
                        technology,
                        description,
                      },
                    })
                  }
                >
                  Edit
                </MenuItem>
                <MenuItem onClick={() => deleteLab(lab[0]._id)}>
                  Delete
                </MenuItem>
              </MenuList>
            </Paper>
            <img src="/lab-img.jpg" style={{ width: 800, height: 450 }} />
            <h1>{title}</h1>
            <h3>technology: {technology}</h3>
            <h5>Session start {start_date.toDateString()} </h5>
            <h5>Session end {end_date.toDateString()}</h5>
            <p>{description}</p>
          </Container>
        )
      }
    </>
  );
};

export default LabDetail;
