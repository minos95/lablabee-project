//route to show detail of a lab

import React, { useState } from "react";
import { Container } from "@mui/material";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { IconButton, Button, Paper, MenuList, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import dayjs from "dayjs";
import { deleteLab as deleteLabSlice } from "../store/labSlice";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import LabForm from "../component/labForm";
import Modal from "react-modal";
const LabDetail = ({ route }) => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location", location);
  const dispatch = useDispatch();
  const [showMenuList, setShowMenuList] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const _id = location.state._id;
  console.log(_id);
  const lab = useSelector((state) => {
    return state.labList.filter((item) => item._id === _id);
  }, shallowEqual);
  console.log("lab", lab);
  const start_date = new Date(lab[0].start_date);
  const end_date = new Date(lab[0].end_date);
  const description = lab[0].description;
  const technology = lab[0].technology;
  const title = lab[0].title;
  const deleteLab = (_id) => {
    dispatch(deleteLabSlice(_id));
  };
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Container maxWidth="md" sx={{ mb: 25, position: "relative" }}>
        <IconButton
          style={{ position: "absolute", top: 0, right: 0, fontSize: 18 }}
          aria-label="settings"
          onClick={() => setShowMenuList(!showMenuList)}
        >
          <MoreVertIcon />
          More
        </IconButton>
        <Paper style={{ position: "absolute", right: 0, top: 35 }}>
          <MenuList
            style={showMenuList ? { display: "block" } : { display: "none" }}
          >
            <MenuItem onClick={() => deleteLab(lab[0]._id)}>Delete</MenuItem>
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
          </MenuList>
        </Paper>
        <img src="/lab-img.jpg" style={{ width: 800, height: 450 }} />
        <h1>{title}</h1>
        <h3>technology: {technology}</h3>
        <h5>Session start {start_date.toDateString()} </h5>
        <h5>Session end {end_date.toDateString()}</h5>
        <p>{description}</p>
      </Container>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <LabForm
          initialValues={{
            _id: lab[0]._id,
            title: title,
            description: description,
            technology: technology,
            start_date: lab[0].start_date,
            end_date: lab[0].end_date,
          }}
          edit=""
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
};
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default LabDetail;
