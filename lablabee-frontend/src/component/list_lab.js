import React from "react";
import Card from "./card";
import { Button, Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteLab as deleteLabSlice } from "../store/labSlice";
import LabForm from "./labForm";
import dayjs from "dayjs";

import Modal from "react-modal";
const ListLab = ({ labs }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.isLoading);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const deleteLab = (_id) => {
    dispatch(deleteLabSlice(_id));
  };

  return (
    <Container sx={{ mt: 10, mb: 10 }} width="lg">
      <div>
        <Button
          onClick={() => navigate("/labAction", { state: {} })}
          style={{ float: "right" }}
          color="success"
          variant="outlined"
        >
          Ajouter
        </Button>
        <h2>Explore Labs</h2>
      </div>
      <div>
        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 50 }}>
            <CircularProgress />
          </Box>
        ) : labs.length > 0 ? (
          <ul>
            {labs.map((lab) => {
              return (
                <li className="list_lab" key={lab._id}>
                  <Card lab={lab} deleteLab={deleteLab} />
                </li>
              );
            })}
          </ul>
        ) : (
          <h3 style={{ marginTop: "20px", textAlign: "center" }}>
            There is no lab available yet
          </h3>
        )}
      </div>
    </Container>
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

export default ListLab;
