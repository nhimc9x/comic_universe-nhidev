import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'homeData',
  initialState: {
    completedCommics: null,
    recentUpdateCommics: null,
    trendingCommics: null,
    recommendCommics: null
  },
  reducers: {
    saveCompletedComics: (state, action) => {
      state.completedCommics = action.payload
    },
    saveRecentUpdateComics: (state, action) => {
      state.recentUpdateCommics = action.payload
    },
    saveTrendingComics: (state, action) => {
      state.trendingCommics = action.payload
    },
    saveRecommendComics: (state, action) => {
      state.recommendCommics = action.payload
    }
  }
})
export default homeSlice.reducer