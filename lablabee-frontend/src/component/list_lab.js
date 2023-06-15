import Card from "./card";

import { useState } from "react";
const ListLab = ({ labs }) => {
  return labs.map((lab) => {
    return (
      <div className="list_lab">
        <Card lab={lab} />
      </div>
    );
  });
};

export default ListLab;
