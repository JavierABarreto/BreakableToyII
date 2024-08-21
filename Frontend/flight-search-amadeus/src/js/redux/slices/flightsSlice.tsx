import { createSlice } from '@reduxjs/toolkit'

export const flightSlice = createSlice({
  name: 'flights',
  initialState: {
    flights: [],
    flight: {}
  },
  reducers: {
    setFlight: (state, action) => {
      state.flight = action.payload;
    },
    setFlights: (state, action) => {
      state.flights = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setFlight, setFlights } = flightSlice.actions

export default flightSlice.reducer