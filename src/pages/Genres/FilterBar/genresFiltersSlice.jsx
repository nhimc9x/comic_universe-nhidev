import { createSlice } from '@reduxjs/toolkit'

export const genresFiltersSlice = createSlice({
  name: 'genresFilters',
  initialState: {
    dataGenres: [],
    genreCurrent: null,
    statusCurrent: 'all',
    totalPage: null,
    pageCurrent: 1
  },
  reducers: {
    saveGenres: (state, action) => {
      state.dataGenres = action.payload
    },
    changeGenreCurrent: (state, action) => {
      state.genreCurrent = action.payload
      state.pageCurrent = 1
      state.totalPage = null
    },
    changeStatusCurrent: (state, action) => {
      state.statusCurrent = action.payload
      state.pageCurrent = 1
      state.totalPage = null
    },
    changePageCurrent: (state, action) => {
      state.pageCurrent = action.payload
    },
    saveTotalPage: (state, action) => {
      state.totalPage = action.payload
    },
    resetGenresFilters: (state) => {
      state.genreCurrent = state.dataGenres[0]
      state.statusCurrent = 'all'
      state.totalPage = null
      state.pageCurrent = 1
    }
  }
})

export default genresFiltersSlice.reducer