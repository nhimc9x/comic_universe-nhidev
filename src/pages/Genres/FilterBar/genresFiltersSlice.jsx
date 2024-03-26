import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getComicsByGenre } from '../../../apiServices'

export const fetchApiGetComics = createAsyncThunk(
  'genresFilters/fetchApiGetComics',
  async (data, thunkAPI) => {
    const result = await getComicsByGenre(data.genre || 'all', data.page, data.status)
    return result
  }
)

export const genresFiltersSlice = createSlice({
  name: 'genresFilters',
  initialState: {
    dataGenres: [],
    dataComics: null,
    genreCurrent: null,
    statusCurrent: 'all',
    totalPage: null,
    pageCurrent: 1,
    loading: false,
    isChanged: false
  },
  reducers: {
    saveGenres: (state, action) => {
      state.dataGenres = action.payload
      state.genreCurrent = action.payload[0]
    },
    saveComics: (state, action) => {
      state.dataComics = action.payload
    },
    changeGenreCurrent: (state, action) => {
      state.genreCurrent = action.payload
      state.pageCurrent = 1
      state.totalPage = null
      state.isChanged = false
    },
    changeStatusCurrent: (state, action) => {
      state.isChanged = false
      state.statusCurrent = action.payload
      state.pageCurrent = 1
      state.totalPage = null
    },
    changePageCurrent: (state, action) => {
      state.pageCurrent = action.payload
      state.isChanged = false
    },
    saveTotalPage: (state, action) => {
      state.totalPage = action.payload
    },
    resetGenresFilters: (state) => {
      state.genreCurrent = state.dataGenres[0]
      state.statusCurrent = 'all'
      state.totalPage = null
      state.pageCurrent = 1
      state.isChanged = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiGetComics.pending, (state) => {
        state.loading = true
        // Tạo ra 24 thẻ Card Skeleton khi đang gọi API
        state.dataComics = Array.from({ length: 24 })
      })
      .addCase(fetchApiGetComics.fulfilled, (state, action) => {
        state.totalPage = action.payload.total_pages
        state.dataComics = action.payload.comics
        state.loading = false
        state.isChanged = true
      })
  }
})

export default genresFiltersSlice.reducer
