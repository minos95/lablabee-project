import { createSlice } from "@reduxjs/toolkit";
import lablabeeAPI from "../api/lablabeeAPI";
import { useDispatch } from "react-redux";
const labSlice = createSlice({
  name: "labList",
  initialState: {
    labList: [],
  },
  reducers: {
    getLabs(state, action) {
      state.labList = action.payload;
    },
    addLab(state, action) {
      const newLab = action.payload;

      state.labList.push({
        id: newLab.id,
        title: newLab.title,
        description: newLab.description,
        technology: newLab.technology,
        date_start: newLab.date_start,
        date_end: newLab.date_end,
      });
    },
    editlab(state, action) {},
    deleteLab(state, action) {
      console.log("action payload delete lab", action.payload);
      return {
        ...state,
        labList: state.labList.filter((lab) => lab._id !== action.payload),
      };
    },
  },
});

export const labActions = labSlice.actions;

export const deleteLab = (_id) => {
  return async (dispatch) => {
    const deletehandler = async () => {
      const response = await lablabeeAPI.delete("/labs/" + _id);
      return response;
    };
    try {
      const response = await deletehandler();

      dispatch(labActions.deleteLab(_id));
    } catch (err) {
      console.log(err);
    }
  };
};

export default labSlice;
