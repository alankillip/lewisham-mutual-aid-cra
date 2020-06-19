import {Action, createReducer} from "@reduxjs/toolkit";
import {initialState, State} from "../state";
import {searchTermAction} from '../actions';

const reduceSearchTerm = (state: State, action: Action) => {
  if (searchTermAction.match(action)) {
    return {
      ...state,
      searchTerm: action.payload
    }
  }
};

export const rootReducer = createReducer(initialState, {
  [searchTermAction.type]: reduceSearchTerm
});

export type RootState = ReturnType<typeof rootReducer>;
