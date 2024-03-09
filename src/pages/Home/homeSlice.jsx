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
    getCompletedComics: (state, action) => {
      state.completedCommics = action.payload
    },
    getRecentUpdateComics: (state, action) => {
      state.recentUpdateCommics = action.payload
    },
    getTrendingComics: (state, action) => {
      state.trendingCommics = action.payload
    },
    getRecommendComics: (state, action) => {
      state.recommendCommics = action.payload
    }
  }
})
export default homeSlice.reducer