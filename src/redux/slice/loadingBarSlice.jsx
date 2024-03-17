import { createSlice } from '@reduxjs/toolkit'

const loadingBarSlice = createSlice({
  name: 'loadingBar',
  initialState: {
    isLoading: false
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})

export const { setLoading } = loadingBarSlice.actions
export default loadingBarSlice.reducer
