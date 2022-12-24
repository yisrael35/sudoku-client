import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  language: process.env.REACT_APP_DEFAULT_LANGUAGE,
  language_direction: process.env.REACT_APP_DEFAULT_LANGUAGE_DIRECTION,
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateLanguage: (state, action) => {
      state.language = action.payload.language
      state.language_direction = action.payload.language_direction
    },
  },
})

export const { updateLanguage } = settingsSlice.actions

export const setUpdateLanguage = (language, language_direction) => (dispatch) => {
  dispatch(updateLanguage({ language, language_direction }))
}

export default settingsSlice.reducer
