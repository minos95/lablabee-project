import React from "react";
import Card from "./card";
import { Button, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { deleteLab as deleteLabSlice } from "../store/labSlice";
import LabForm from "./labForm";
import dayjs from "dayjs";

import Modal from "react-modal";
const ListLab = ({ labs }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  function closeModal() {
    setIsOpen(false);
    setEdit(false);
  }

  const deleteLab = (_id) => {
    dispatch(deleteLabSlice(_id));
  };

  return (
    <Container>
      <div>
        <Button
          onClick={openModal}
          style={{ float: "right" }}
          color="success"
          variant="outlined"
        >
          Ajouter
        </Button>
      </div>
      <ul>
        {labs.map((lab) => {
          return (
            <li className="list_lab" key={lab._id}>
              <Card lab={lab} deleteLab={deleteLab} />
            </li>
          );
        })}
      </ul>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {edit ? (
          <LabForm initialValues={{}} closeModal={closeModal} />
        ) : (
          <LabForm closeModal={closeModal} />
        )}
      </Modal>
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
