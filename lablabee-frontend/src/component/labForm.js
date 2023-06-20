import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addLab as addLabSlice } from "../store/labSlice";

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
import TextareaAutosize from "@mui/base/TextareaAutosize";

const LabForm = ({ closeModal, initialValues }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(initialValues.title);
  const [technology, setTechnology] = useState(initialValues.technology);
  const [description, setDescription] = useState(initialValues.description);
  const [end_date, setDateEnd] = useState(initialValues.end_date);
  const [start_date, setDateStart] = useState(initialValues.start_date);

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
  };
  return (
    <FormGroup>
      <TextField
        type="text"
        value={title}
        label="Title"
        onChange={(e) => setTitle(e.target.value)}
        variant="outlined"
        sx={{ mb: 3 }}
        required
        inputProps={{ maxLength: 30 }}
      />
      <Select
        label="Technology"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={technology}
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
      <TextareaAutosize
        type="text"
        label="Description"
        value={description}
        minRows={8}
        maxRows={12}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ mb: 3 }}
        inputProps={{ maxLength: 90 }}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="start date"
          disablePast
          onChange={(newValue) => setDateStart(newValue)}
          sx={{ mb: 3, mt: 3 }}
        />
        <DatePicker
          label="end date"
          disablePast
          onChange={(newValue) => setDateEnd(newValue)}
          sx={{ mb: 3 }}
        />
      </LocalizationProvider>

      <Button
        onClick={() => {
          addLab();
          closeModal();
        }}
        sx={{ mb: 3 }}
      >
        valider
      </Button>
      <Button onClick={closeModal}>cancell</Button>
    </FormGroup>
  );
};
LabForm.defaultProps = {
  initialValues: {
    title: "",
    description: "",
    technology: "",
    start_date: "",
    end_date: "",
  },
};

export default LabForm;
