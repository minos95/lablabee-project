import { useDispatch } from "react-redux";
import { labActions } from "../store/labSlice";
import lablabeeAPI from "../api/lablabeeAPI";

const getLabsHook = async (dispatch) => {
  const response = await lablabeeAPI.get("/labs");
  console.log("reponse ", response);
  dispatch(labActions.getLabs(response.data));
};

export default getLabsHook;
