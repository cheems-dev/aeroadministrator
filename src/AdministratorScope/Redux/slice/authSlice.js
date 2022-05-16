import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  admin: {
    token: '',
  },
}
export const authSlice = createSlice({
  name: 'admin',
  initialState: initialState,
  reducers: {
    loginSuccess: (state = {}, action) => {
      state.admin = action.payload
    },
    logoutSuccess: (state) => {
      state.admin = initialState
    },
  },
})
