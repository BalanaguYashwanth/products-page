import { configureStore } from "@reduxjs/toolkit";
import { catgeoryReducer } from "./reducer";

export const store = configureStore({ reducer: catgeoryReducer });

const unsubscribe = store.subscribe(() => store.getState());
