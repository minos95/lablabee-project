import React from "react";
import Footer from "../component/footer";
import Header from "../component/header";
import { Redirect, Switch, Route } from "react-router-dom";
import { Grid } from "@mui/material";

const HomeRoute = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <h1>Welcome to LABLABEE Project</h1>
        <h4>by Amine Rahal</h4>
      </Grid>
    </>
  );
};

export default HomeRoute;
