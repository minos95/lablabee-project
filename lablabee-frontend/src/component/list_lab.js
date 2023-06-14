import Card from "./card";

import { useState } from "react";
const ListLab = () => {
  const [labs, setLabs] = useState([
    { id: 0, name: "MPLS", description: "start with mpls", date: "05-12-2023" },
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

  return labs.map((lab) => {
    return (
      <div className="list_lab">
        <Card lab={lab} />
      </div>
    );
  });
};

export default ListLab;
