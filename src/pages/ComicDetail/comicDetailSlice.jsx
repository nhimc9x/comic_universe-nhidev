import { createSlice } from '@reduxjs/toolkit'

export const comicDetailSlice = createSlice({
  name: 'comicDetail',
  initialState: {
    dataComicDetail: null
  },
  reducers: {
    saveComicDetail: (state, action) => {
      state.dataComicDetail = action.payload
    }
  }
})
export default comicDetailSlice.reducer
