import { configureStore } from '@reduxjs/toolkit'
import authReducer, { userSlice } from './slices/authSlice'
import postsReducer, { postsSlice } from './slices/postsSlice'

export interface RootState {
  posts: postsSlice;
  auth: userSlice;
}

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
  },
})

export type AppDispatch = typeof store.dispatch