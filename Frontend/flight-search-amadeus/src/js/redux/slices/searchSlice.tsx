import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'searchParams',
  initialState: {
    departureAirport: "",
    arrivalAirport: "",
    departureDate: "",
    arrivalDate: "",
    currency: "",
    nonStop: false
  },
  reducers: {
    setParam: (state, action) => {
      const type = action.payload.type;

      switch(type) {
        case "departureAirport":
          state.departureAirport = action.payload.data;
          break;

        case "arrivalAirport":
          state.arrivalAirport = action.payload.data;
          break;

        case "departureDate":
          state.departureDate = action.payload.data;
          break;

        case "arrivalDate":
          state.arrivalDate = action.payload.data;
          break;

        case "currency":
          state.currency = action.payload.data;
          break;

        case "nonStop":
          state.nonStop = action.payload.data;
          break;
      
        default:
          break;
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { setParam } = searchSlice.actions

export default searchSlice.reducer