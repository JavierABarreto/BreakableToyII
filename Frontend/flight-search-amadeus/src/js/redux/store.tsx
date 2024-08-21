import { configureStore } from '@reduxjs/toolkit'
import flightSliceReducer from './slices/flightsSlice.tsx'
import searchSliceReducer from './slices/searchSlice.tsx'

export default configureStore({
  reducer: {
    flightSliceReducer: flightSliceReducer,
    searchSliceReducer: searchSliceReducer
  }
})