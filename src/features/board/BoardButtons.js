import React from 'react'
import { useDispatch } from 'react-redux'
import { solveBoard, checkIfSolved, cleanBoard, generateRandomSudoku, uploadSudokuImage } from '../../redux/Board/boardSlice'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Dictionary from '../../utils/dictionary'

export function BoardButtons() {
  const dispatch = useDispatch()
  const dictionary = Dictionary()

  const upload = (e) => {
    const file = e.target.files[0]
    if (file) {
      dispatch(uploadSudokuImage(file))
    }
  }

  return (
    <div>
      <Stack direction='column' alignItems='center' spacing={2}>
        <Button variant='outlined' onClick={() => dispatch(cleanBoard())}>
          {dictionary['clean']}
        </Button>
        <Button variant='outlined' onClick={() => dispatch(solveBoard())}>
          {dictionary['solve']}
        </Button>
        <Button variant='outlined' onClick={() => dispatch(generateRandomSudoku())}>
          {dictionary['generateRandomBoard']}
        </Button>
        <Button variant='outlined' onClick={() => dispatch(checkIfSolved())}>
          {dictionary['checkForWin']}
        </Button>
        <Button variant='contained' component='label'>
          {dictionary['uploadSudokuImage']}
          <input onChange={upload} name='file_name' accept='image/x-png,image/jpeg,image/svg' type='file' />
        </Button>
      </Stack>
    </div>
  )
}
