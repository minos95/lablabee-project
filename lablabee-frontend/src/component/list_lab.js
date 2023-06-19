import React from "react";

import Card from "./card";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  labActions,
  deleteLab as deleteLabSlice,
  addLab as addLabSlice,
} from "../store/labSlice";
import {
  FormGroup,
  FormLabel,
  Input,
  Button,
  Container,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

import dayjs from "dayjs";

import Modal from "react-modal";
const ListLab = ({ labs }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [technology, setTechnology] = useState("");
  const [description, setDescription] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const [end_date, setDateEnd] = useState();
  const [start_date, setDateStart] = useState();
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
    dispatch(
      addLabSlice({
        title,
        description,
        technology,
        start_date,
        end_date,
      })
    );
    closeModal();
  };

  const deleteLab = (_id) => {
    dispatch(deleteLabSlice(_id));
  };

  function handleChange(value) {
    setTechnology(value);
  }

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
        <FormGroup>
          <TextField
            type="text"
            value={title}
            label="Title"
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
            sx={{ mb: 3 }}
          />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={technology}
            label="Technology"
            onChange={(e) => setTechnology(e.target.value)}
            sx={{ mb: 3 }}
          >
            <MenuItem value={"network"}>Network</MenuItem>
            <MenuItem value={"cloud"}>Cloud</MenuItem>
            <MenuItem value={"database"}>Database</MenuItem>
            <MenuItem value={"React"}>React</MenuItem>
            <MenuItem value={"Nodejs"}>Nodejs</MenuItem>
          </Select>

          <FormLabel>Description</FormLabel>
          <TextField
            type="text"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ mb: 3 }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="start date"
              disablePast
              onChange={(newValue) => setDateStart(newValue)}
              sx={{ mb: 3 }}
            />
            <DatePicker
              label="end date"
              disablePast
              onChange={(newValue) => setDateEnd(newValue)}
              sx={{ mb: 3 }}
            />
          </LocalizationProvider>

          <Button onClick={addLab} sx={{ mb: 3 }}>
            valider
          </Button>
          <Button onClick={closeModal}>cancell</Button>
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
