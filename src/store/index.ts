import { configureStore } from '@reduxjs/toolkit'
import { rootReducer, RootState } from '../reducers'

const store = configureStore({
  reducer: rootReducer
});

export default store
