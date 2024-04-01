import { createSlice } from '@reduxjs/toolkit'

export const topSlice = createSlice({
  name: 'rankingComics',
  initialState: {
    dataTopComics: [],
    type: 'all',
    isChanged: true,
    quantity: 10
  },
  reducers: {
    saveDataTopComics: (state, action) => {
      state.dataTopComics = action.payload
      state.isChanged = false
    },
    changeType: (state, action) => {
      state.type = action.payload
      state.quantity = 10
      state.isChanged = true
    },
    changeQuantity: (state) => {
      state.quantity = undefined
    }
  }
})

export default topSlice.reducer


