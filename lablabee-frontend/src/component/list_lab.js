import Card from "./card";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { labActions } from "../store/labSlice";
import { FormGroup, FormLabel, Input, Button, Container } from "@mui/material";

import Modal from "react-modal";
const ListLab = ({ labs }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addLab = () => {
    console.log("add lab");
    dispatch(labActions.addLab({ name, description }));
    closeModal();
  };

  const deleteLab = (id) => {
    dispatch(labActions.deleteLab(id));
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
            <li className="list_lab" key={lab.id}>
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
        <FormGroup>
          <FormLabel>Enter your name:</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <FormLabel>Description</FormLabel>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Button onClick={addLab}>valider</Button>
          <Button>cancell</Button>
        </FormGroup>
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
