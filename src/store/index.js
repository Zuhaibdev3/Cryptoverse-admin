/* eslint-disable @typescript-eslint/no-explicit-any */
// ** Toolkit imports
import { configureStore } from "@reduxjs/toolkit";

// ** Reducers
import users from "./apps/users";
import { useSelector, useDispatch } from "react-redux";


export const store = configureStore({
  reducer: {
    users,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
