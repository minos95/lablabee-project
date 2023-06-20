import React, { useState } from "react";
import ListLab from "../component/list_lab";
import Footer from "../component/footer";
import Header from "../component/header";
import HomeRoute from "./homeRoute.js";
import LabsRoute from "./labsRoute";
import LabDetail from "./labDetailRoute";

import { Redirect, Routes, Route } from "react-router-dom";
const MainRoute = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<HomeRoute />} />
        <Route path="/labs" element={<LabsRoute />} />
        <Route path="/labDetail/:_id" exact element={<LabDetail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoute;
