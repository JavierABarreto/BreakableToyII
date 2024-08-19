import { configureStore } from '@reduxjs/toolkit'
import flightSliceReducer from './flightsSlice.tsx'

export default configureStore({
  reducer: {
    flightSliceReducer: flightSliceReducer
  }
})