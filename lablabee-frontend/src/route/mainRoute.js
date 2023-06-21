import React, { useState } from "react";
import ListLab from "../component/list_lab";
import Footer from "../component/footer";
import Header from "../component/header";
import HomeRoute from "./homeRoute.js";
import LabsRoute from "./labsRoute";
import LabDetail from "./labDetailRoute";
import LabAction from "./labActionRoute";

import { Redirect, Routes, Route } from "react-router-dom";
const MainRoute = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/home" element={<HomeRoute />} />
        <Route path="/labs" element={<LabsRoute />} />
        <Route path="/labDetail/" exact element={<LabDetail />} />
        <Route path="/labAction" element={<LabAction />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoute;
