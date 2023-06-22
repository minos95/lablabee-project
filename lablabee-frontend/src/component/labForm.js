import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addLab as addLabSlice,
  editLab as editLabSlice,
} from "../store/labSlice";

import { useNavigate } from "react-router-dom";

import {
  FormGroup,
  FormLabel,
  FormControl,
  InputLabel,
  Input,
  Button,
  Container,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import TextareaAutosize from "@mui/base/TextareaAutosize";

const LabForm = ({ initialValues, edit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("initialValues", initialValues.end_date);
  const _id = initialValues._id;
  const [title, setTitle] = useState(initialValues.title);
  const [technology, setTechnology] = useState(initialValues.technology);
  const [description, setDescription] = useState(initialValues.description);
  const [end_date, setDateEnd] = useState(initialValues.end_date);
  const [start_date, setDateStart] = useState(initialValues.start_date);

  const addLab = (navigate) => {
    console.log("add lab");
    dispatch(
      addLabSlice(
        {
          title,
          description,
          technology,
          start_date,
          end_date,
        },
        navigate
      )
    );
  };
  const editLab = (navigate) => {
    dispatch(
      editLabSlice(
        {
          title,
          description,
          technology,
          start_date,
          end_date,
          _id,
        },
        navigate
      )
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
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Technology</InputLabel>
        <Select
          label="Technology"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={technology}
          onChange={(e) => setTechnology(e.target.value)}
          sx={{ mb: 3 }}
        >
          <MenuItem value={"Network"}>Network</MenuItem>
          <MenuItem value={"Cloud"}>Cloud</MenuItem>
          <MenuItem value={"Database"}>Database</MenuItem>
          <MenuItem value={"Artificial intelligence"}>
            Artificial intelligence
          </MenuItem>
          <MenuItem value={"data science"}>Data science</MenuItem>
          <MenuItem value={"Information technology"}>
            Information Technology '
          </MenuItem>
          <MenuItem value={"Devops"}>Devops</MenuItem>
          <MenuItem value={"Software"}>Software</MenuItem>
          <MenuItem value={"Internet of things"}>Internet of things</MenuItem>
          <MenuItem value={"Nertwork security"}>Network Security</MenuItem>
        </Select>
      </FormControl>

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
          value={dayjs(start_date)}
          onChange={(newValue) => setDateStart(newValue)}
          sx={{ mb: 3, mt: 3 }}
        />
        <DatePicker
          label="end date"
          disablePast
          value={dayjs(end_date)}
          onChange={(newValue) => setDateEnd(newValue)}
          sx={{ mb: 3 }}
        />
      </LocalizationProvider>

      <Button
        onClick={() => {
          if (typeof edit === "undefined") {
            addLab(navigate);
          } else {
            editLab(navigate);
          }
        }}
        sx={{ mb: 3 }}
        variant="contained"
      >
        valider
      </Button>
    </FormGroup>
  );
};
LabForm.defaultProps = {
  initialValues: {
    _id: 0,
    title: "",
    description: "",
    technology: "",
    start_date: "",
    end_date: "",
  },
};

export default LabForm;
