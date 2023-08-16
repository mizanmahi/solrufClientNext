import { configureStore } from '@reduxjs/toolkit'
import scrollStepsReducer from './slices/BlogScrollSlice'

export const store = configureStore({
  reducer: {
    scrollSteps: scrollStepsReducer,
  },
})