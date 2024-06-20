import { configureStore } from "@reduxjs/toolkit";
import ActivitiesSlice from "../features/activitySlice";
import {TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


const store = configureStore({
    reducer : {
        activites :  ActivitiesSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    
})

export const useAppDispatch: () => typeof store.dispatch=useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector
export default store