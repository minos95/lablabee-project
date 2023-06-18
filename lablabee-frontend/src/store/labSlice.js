import { createSlice } from "@reduxjs/toolkit";
import lablabeeAPI from "../api/lablabeeAPI";
const labSlice = createSlice({
  name: "labList",
  initialState: {
    labList: [
      {
        id: 0,
        title: "MPLS",
        description: "start with mpls",
        technology: "network",
        date_start: "05-12-2023",
        date_end: "05-12-2023",
      },
      {
        id: 1,
        title: "BGP",
        description: "Introduction to BGP ",
        technology: "network",
        date_start: "05-12-2023",
        date_end: "05-12-2023",
      },
      {
        id: 2,
        title: "OSPF",
        description: "OSPF routing protocle lab ",
        technology: "network",
        date_start: "05-12-2023",
        date_end: "05-12-2023",
      },
    ],
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
      lablabeeAPI.delete("/Labs/" + action.payload).then((result) => {
        console.log(result);
      });
      return {
        ...state,
        labList: state.labList.filter((item) => item.id !== action.payload),
      };
    },
  },
});

export const labActions = labSlice.actions;

export default labSlice;
