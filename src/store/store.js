import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
// Reducer
import { authReducer } from '../AdministratorScope/Redux/reducer/authReducer'

const reducers = combineReducers({
  authReducer,
  // here we will be adding reducers
})

const persistConfig = {
  key: 'root',
  storage,
}

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: [thunk],
})

export default store
