import { useDispatch } from "react-redux";
import { labActions } from "../store/labSlice";
import lablabeeAPI from "../api/lablabeeAPI";

const getLabsHook = async (dispatch) => {
  dispatch(labActions.editLoading(true));
  try {
    const response = await lablabeeAPI.get("/labs");
    console.log("reponse ", response);
    dispatch(labActions.getLabs(response.data));
  } catch (err) {
    console.log(err.message);
    dispatch(labActions.addError(err.message));
  }
  dispatch(labActions.editLoading(false));
};

export default getLabsHook;
