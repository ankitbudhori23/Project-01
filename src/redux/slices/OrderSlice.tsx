import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    addOrder: (state, action) => {
      state.orders = [action.payload, ...state.orders];
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
    },
    updateOrder: (state, action) => {
      const index = state.orders.findIndex(
        (order) => order.id === action.payload.id
      );
      if (index !== -1) {
        state.orders[index] = action.payload;
      }
    },
  },
});

export const { setOrders, addOrder, deleteOrder, updateOrder } =
  orderSlice.actions;

export default orderSlice.reducer;
