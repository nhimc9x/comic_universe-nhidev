import { createSlice } from '@reduxjs/toolkit'

export const moreComicsSlice = createSlice({
  name: 'moreComics',
  initialState: {
    dataCurrent: [],
    pathNameCurrent: ''
  },
  reducers: {
    saveDataCurrent: (state, action) => {
      state.dataCurrent = action.payload
    },
    changePathNameCurrent: (state, action) => {
      state.pathNameCurrent = action.payload
    }
  }
})

export default moreComicsSlice.reducer
