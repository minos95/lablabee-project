import React, { useEffect } from "react";
import ListLab from "../component/list_lab";
import { labActions } from "../store/labSlice";
import { useSelector, useDispatch } from "react-redux";
import getLabsHook from "../hooks/getLabsHook";
const LabsRoute = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //useEffect allow to excecute the function once page render
    getLabsHook(dispatch);
  }, [dispatch]);
  const labList = useSelector((state) => state.labList); // get state of lab's list from redux store

  return <ListLab style={{ margintTop: 20 }} labs={labList} />;
};

export default LabsRoute;
