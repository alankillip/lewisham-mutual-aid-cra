import {createAction} from '@reduxjs/toolkit';

export const prepareSetSearchTerm = (searchTerm: string) => ({
  payload: searchTerm
});

export const searchTermAction = createAction('REDUX_SEARCH_TERM', prepareSetSearchTerm);
