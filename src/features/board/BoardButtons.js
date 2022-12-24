import React from 'react'
import { useDispatch } from 'react-redux'
// import * as actionSnackBar from '../../redux/SnackBar/snackBarSlice'
import { solveBoard, cleanBoard } from '../../redux/Board/boardSlice'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Dictionary from '../../utils/dictionary'

export function BoardButtons() {
  const dispatch = useDispatch()
  const dictionary = Dictionary()

  return (
    <div>
      <Stack direction='row' alignItems='center' spacing={2}>
        <Button variant='outlined' onClick={() => dispatch(cleanBoard())}>
          {' '}
          {dictionary['clean']}
        </Button>
        <Button variant='outlined' onClick={() => dispatch(solveBoard())}>
          {dictionary['solve']}
        </Button>
        <Button variant='outlined'>{dictionary['generateRandomBoard']}</Button>
        <Button variant='outlined'>{dictionary['checkForWin']}</Button>
        <Button variant='contained' component='label'>
          {dictionary['uploadSudokuImage']}
          <input hidden accept='image/*' multiple type='file' />
        </Button>
      </Stack>
    </div>
  )
}
