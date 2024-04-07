import { createSlice } from '@reduxjs/toolkit'

export const searchResultSlice = createSlice({
  name: 'searchResult',
  initialState: {
    dataSearchResult: null
  },
  reducers: {
    saveDataSearchResult: (state, action) => {
      state.dataSearchResult = action.payload
    }
  }
})

export default searchResultSlice.reducer
