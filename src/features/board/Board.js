import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TextField from '@mui/material/TextField'
import { useDispatch, useSelector } from 'react-redux'
import * as actionSnackBar from '../../redux/SnackBar/snackBarSlice'
import * as actionBoard from '../../redux/Board/boardSlice'
import { styled } from '@mui/system'

const StyledTableContainer = styled(TableContainer)({
  justifyContent: 'center',
  margin: '20px auto',
  maxWidth: '450px',
})

const StyledTableCell = styled(TableCell)({
  border: '1px solid #000',
  padding: 0,
  width: '40px',
  height: '40px',
  textAlign: 'center',
  position: 'relative',
  '&.boldBorder': {
    borderWidth: '2px',
  },
  '&.bottomBorder': {
    borderBottomWidth: '2px !important',
  },
  '&.rightBorder': {
    borderRightWidth: '2px !important',
  },
})

const StyledTextField = styled(TextField)({
  width: '100%',
  // height: '100%',
  textAlign: 'center',
  '& input': {
    textAlign: 'center',
    padding: 0,
    // height: '100%',
    fontSize: '2em',
  },
})

const isValid = (num) => {
  return /^([1-9])$/.test(num)
}

export function Board() {
  const dispatch = useDispatch()
  const board = useSelector((state) => state.board.board)

  return (
    <StyledTableContainer component={Paper}>
      <Table size='small'>
        <TableBody>
          {board.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <StyledTableCell key={cellIndex} className={`${rowIndex % 3 === 2 ? 'bottomBorder' : ''} ${cellIndex % 3 === 2 ? 'rightBorder' : ''}`}>
                  <StyledTextField
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    value={cell || ''}
                    onChange={(e) => {
                      if (e.target.value === '') {
                        dispatch(actionBoard.updateCellInBoard({ num: 0, rowIndex, cellIndex }))
                      } else if (isValid(e.target.value)) {
                        dispatch(actionBoard.updateCellInBoard({ num: Number(e.target.value), rowIndex, cellIndex }))
                      } else {
                        dispatch(actionSnackBar.setSnackBar('error', `The value: '${e.target.value}' is not valid`, 3000))
                      }
                    }}
                  />
                </StyledTableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}
