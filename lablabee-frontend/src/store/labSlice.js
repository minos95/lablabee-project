import { configureStore, createSlice } from "@reduxjs/toolkit";

const labSlice = createSlice({
  name: "labList",
  initialState: {
    labList: [
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
    ],
  },
  reducers: {
    addLab(state, action) {
      const newLab = action.payload;
      state.labList.push({
        id: newLab.id,
        name: newLab.name,
        description: newLab.description,
      });
    },
    editlab(state, action) {},
    deleteLab(state, action) {
      return {
        ...state,
        labList: state.labList.filter((item) => item.id !== action.payload),
      };
    },
  },
});
export const labActions = labSlice.actions;

export default labSlice;
