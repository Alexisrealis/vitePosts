import { createSlice } from '@reduxjs/toolkit'

export interface User {
  name: string,
  surname: string,
  email: string,
  password: string
}

export interface userSlice {
  user: User
}

const initialState = {
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer