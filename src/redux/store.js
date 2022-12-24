import { configureStore } from '@reduxjs/toolkit'
import boardReducer from './Board/boardSlice'
import snackbarReducer from './SnackBar/snackBarSlice'
import settingsReducer from './Settings/settingsSlice'

export const store = configureStore({
  reducer: {
    board: boardReducer,
    snackbar: snackbarReducer,
    settings: settingsReducer,
  },
})
