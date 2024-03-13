import { createSlice } from '@reduxjs/toolkit'

export const topSlice = createSlice({
  name: 'rankingComics',
  initialState: {
    dataTopAll: []
  },
  reducers: {
    saveDataTopAll: (state, action) => {
      state.dataTopAll = action.payload
    }
  }
})

export default topSlice.reducer


