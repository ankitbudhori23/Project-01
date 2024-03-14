import {combineReducers} from '@reduxjs/toolkit';
import InitialReducer from './slices/InitialSlice';
import OrderReducer from './slices/OrderSlice';
import ModalReducer from './slices/ModalSlice';

const RootReducer = combineReducers({
  initial: InitialReducer,
  order: OrderReducer,
  modal:ModalReducer
});

export default RootReducer;