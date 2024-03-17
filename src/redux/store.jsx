import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../pages/Home/homeSlice'
import genresFiltersReducer from '../pages/Genres/FilterBar/genresFiltersSlice'
import topReducer from '../pages/Top/topSlice'
import loadingBarReducer from './slice/loadingBarSlice'

export const store = configureStore({
  reducer: {
    home: homeReducer,
    genresFilters: genresFiltersReducer,
    top: topReducer,
    loadingBar: loadingBarReducer
  }
})