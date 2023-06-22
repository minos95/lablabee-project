// create and configure redux store

import { createSlice } from "@reduxjs/toolkit";
import lablabeeAPI from "../api/lablabeeAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//  define the reducer and action creators via `createSlice`

const labSlice = createSlice({
  name: "labList",
  initialState: {
    labList: [],
    errorList: [],
    isLoading: false,
  },
  reducers: {
    getLabs(state, action) {
      state.labList = action.payload;
    },
    addLab(state, action) {
      const newLab = action.payload;
      return {
        ...state,
        labList: [
          ...state.labList,
          {
            _id: newLab._id,
            title: newLab.title,
            description: newLab.description,
            technology: newLab.technology,
            start_date: newLab.start_date,
            end_date: newLab.end_date,
          },
        ],
      };
    },

    deleteLab(state, action) {
      console.log(
        "action payload delete lab",
        (lab) => lab._id !== action.payload
      );
      return {
        ...state,
        labList: state.labList.filter((lab) => lab._id !== action.payload),
      };
    },
    editLabSlice(state, action) {
      return {
        ...state,
        labList: state.labList
          .filter((lab) => lab._id == action.payload._id)
          .map(function (lab) {
            lab = action.payload;
            return lab;
          }),
      };
    },
    addError(state, action) {
      const error = action.payload;
      console.log("error payload", action.payload);
      return {
        ...state,
        errorList: [...state.errorList, error],
      };
    },
    editLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});
function refreshPage() {
  window.location.reload(false);
}

// export the plain action creators
export const labActions = labSlice.actions;

// Define a thunk that dispatches those action creators

export const deleteLab = (_id, navigate) => {
  // deleteLab function send delete request to server for deleting lab from database

  return async (dispatch) => {
    const deletehandler = async () => {
      const response = await lablabeeAPI.delete("/labs/" + _id);
      return response;
    };
    dispatch(labActions.editLoading(true));
    try {
      const response = await deletehandler();

      dispatch(labActions.deleteLab(_id));
      navigate("/labs");
    } catch (err) {
      dispatch(labActions.addError(err));
      console.log(err);
    }
    dispatch(labActions.editLoading(false));
  };
};
export const addLab = (
  { title, description, technology, start_date, end_date },
  navigate
) => {
  // addLab function send post request to server for adding lab to database
  return async (dispatch) => {
    dispatch(labActions.editLoading(true));
    try {
      const response = await lablabeeAPI.post("/labs/", {
        title,
        description,
        technology,
        start_date,
        end_date,
      });

      dispatch(labActions.addLab(response.data));
      navigate("/labs");
    } catch (err) {
      dispatch(labActions.addError(err));
    }
    dispatch(labActions.editLoading(false));
  };
};

export const editLab = (
  { title, description, technology, start_date, end_date, _id },
  navigate
) => {
  // editLab function send put request to server for edit lab to database
  const edithandler = async () => {
    const response = await lablabeeAPI.put("/labs/" + _id, {
      title,
      description,
      technology,
      start_date,
      end_date,
    });
    return response;
  };
  return async (dispatch) => {
    dispatch(labActions.editLoading(true));
    try {
      const response = await edithandler();
      dispatch(
        labActions.editLabSlice({
          _id,
          title,
          description,
          technology,
          start_date,
          end_date,
        })
      );
      navigate("/labDetail/", { state: { _id } });
    } catch (err) {
      dispatch(labActions.addError(err));
      console.log(err);
    }
    dispatch(labActions.editLoading(false));
  };
};

export default labSlice;
