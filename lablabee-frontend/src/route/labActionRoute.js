import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import LabForm from "../component/labForm";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const LabAction = () => {
  const [edit, setEdit] = useState();
  const location = useLocation();
  const isLoading = useSelector((state) => state.isLoading);
  console.log("+++++++++++++++++++++++++++++++++++labAction");
  console.log("location state _id", typeof location.state._id);
  const _id = typeof location.state._id;
  return (
    <>
      <Container maxWidth="sm" sx={{ mb: 20, mt: 7 }}>
        {_id === "undefined" ? <h3> Create lab</h3> : <h3> Update lab</h3>}
        {_id === "undefined" ? (
          isLoading ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          ) : (
            <LabForm />
          )
        ) : isLoading ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        ) : (
          <LabForm
            initialValues={{
              _id: location.state._id,
              title: location.state.title,
              description: location.state.description,
              technology: location.state.technology,
              start_date: location.state.start_date,
              end_date: location.state.end_date,
            }}
            edit=""
          />
        )}
      </Container>
    </>
  );
};
export default LabAction;
