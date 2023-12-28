import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      return state + (action.payload || 1)
    },
    decrement: (state, action) => {
      return state - (action.payload || 1)
    },
    setCount: (state, action) => {
      return action.payload || 0
    },
  },
})

export const { increment, decrement, setCount } = counterSlice.actions
export default counterSlice.reducer
