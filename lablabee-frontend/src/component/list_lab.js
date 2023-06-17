import Card from "./card";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { labActions } from "../store/labSlice";
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

import {
  DatePicker,
  LocalizationProvider,
  DateRangePicker,
} from "@mui/x-date-pickers-pro";
import Modal from "react-modal";
const ListLab = ({ labs }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [technology, setTechnology] = useState("");
  const [description, setDescription] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [date_end, setDateEnd] = useState();
  const [date_start, setDateStart] = useState();
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
    dispatch(labActions.addLab({ title, description }));
    closeModal();
  };

  const deleteLab = (id) => {
    dispatch(labActions.deleteLab(id));
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
          <DateRangePicker
            localeText={{ start: "Check-in", end: "Check-out" }}
          />

          <FormLabel>Description</FormLabel>
          <TextField
            type="text"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ mb: 3 }}
          />

          <Button onClick={addLab} sx={{ mb: 3 }}>
            valider
          </Button>
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
