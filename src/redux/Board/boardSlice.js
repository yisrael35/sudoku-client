import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'
import * as actionSnackBar from '../SnackBar/snackBarSlice'


const initialState = {
  board: [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [3, 4, 5, 2, 8, 0, 0, 7, 9],
  ],
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    updateBoard: (state, action) => {
      //TODO
      // console.log('--1')
      // console.log(state.board)
      state.board = action.payload.board
      // console.log('--2')
      // console.log(state.board)
    },
    cleanBoard: (state, action) => {
      console.log(state.board)
      //TODO
      state.board = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
      console.log(state.board)
    },
  },
})


export const generateRandomSudoku = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(process.env.REACT_APP_SUDOKU_SERVER_URL + '/sudoku/random')
    dispatch(updateBoard(response.data))

    dispatch(actionSnackBar.setSnackBar('success', 'Got random board successfully', 2000))
  } catch (error) {
    console.log(error)
    dispatch(actionSnackBar.setSnackBar('error', `server_error`, 3000))
  }
}

export const solveBoard = () => async (dispatch, getState) => {
  try {
    const store = getState()
    const board = store.board.board

    const response = await axios.post(process.env.REACT_APP_SUDOKU_SERVER_URL + '/sudoku/solve', { board })
    dispatch(updateBoard(response.data))

    dispatch(actionSnackBar.setSnackBar('success', 'Board Solved', 2000))
  } catch (error) {
    console.log(error)
    // dispatch(actionSnackBar.setSnackBar('error', `${words_he['server_error']}`, 3000))
    dispatch(actionSnackBar.setSnackBar('error', `server_error`, 3000))
  }
}
export const checkIfSolved = () => async (dispatch, getState) => {
  try {
    const store = getState()
    const board = store.board.board

    const response = await axios.post(process.env.REACT_APP_SUDOKU_SERVER_URL + '/sudoku/solved', { board })

    dispatch(actionSnackBar.setSnackBar('success', response.data, 2000))
    // dispatch(actionSnackBar.setSnackBar('success', 'Board Solved', 2000))
  } catch (error) {
    console.log(error)
    dispatch(actionSnackBar.setSnackBar('error', `server_error`, 3000))
  }
}
export const setCleanBoard = () => async (dispatch) => {
  dispatch(cleanBoard())
}

export const { cleanBoard, updateBoard } = boardSlice.actions

export default boardSlice.reducer
