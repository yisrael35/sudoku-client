import { combineReducers } from '@reduxjs/toolkit'
import boardReducer from './Board/boardSlice'
import snackbarReducer from './SnackBar/snackBarSlice'
import settingsReducer from './Settings/settingsSlice'

const appReducer = combineReducers({
  board: boardReducer,
  snackBar: snackbarReducer,
  settings: settingsReducer,
})

const RootReducer = (state, action) => {
  return appReducer(state, action)
}

export default RootReducer
