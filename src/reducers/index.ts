import {createReducer} from "@reduxjs/toolkit";
import {initialState} from "../state";

export const rootReducer = createReducer(initialState, {

});

export type RootState = ReturnType<typeof rootReducer>;
