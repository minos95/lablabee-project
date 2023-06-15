import React, { useState } from "react";
import ListLab from "../component/list_lab";
import Footer from "../component/footer";
import Header from "../component/header";
import HomeRoute from "./homeRoute.js";
import LabsRoute from "./labsRoute";
import LabDetail from "./labDetailRoute";

import { Redirect, Routes, Route } from "react-router-dom";
const MainRoute = () => {
  const [labs, setLabs] = useState([
    {
      id: 0,
      name: "MPLS",
      description: "start with mpls",
      date: "05-12-2023",
    },
    {
      id: 1,
      name: "BGP",
      description: "Introduction to BGP ",
      date: "03-11-2023",
    },
    {
      id: 2,
      name: "OSPF",
      description: "OSPF routing protocle lab ",
      date: "05-12-2023",
    },
  ]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<HomeRoute />} />
        <Route path="/labs" element={<LabsRoute labs={labs} />} />
        <Route path="/labDetail" exact element={LabDetail} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoute;
