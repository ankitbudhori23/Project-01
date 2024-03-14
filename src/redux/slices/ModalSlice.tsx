import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  mode: "add" | "edit";
  data: any;
}

const initialState: ModalState = {
  isOpen: false,
  mode: "add",
  data: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<"add" | "edit">) => {
      state.isOpen = true;
      state.mode = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.data = null;
    },
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { openModal, closeModal, setData } = modalSlice.actions;

export const selectModalState = (state) => state.modal;

export default modalSlice.reducer;
