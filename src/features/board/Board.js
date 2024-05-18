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

const isValid = (num) => {
  return /^([1-9])$/.test(num)
}
export function Board() {
  const dispatch = useDispatch()
  
  const board = useSelector((state) => state.board.board)

  return (
    <TableContainer component={Paper} style={{ justifyContent: 'center' }}>
      <Table size='small'>
        <TableBody>
          {board.map((element, rowIndex) => (
            <TableRow key={rowIndex}>
              {board[rowIndex].map((element, cellIndex) => (
                <TableCell key={cellIndex} size='small' padding={'none'} margin={'none'}>
                  <TextField
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    value={board[rowIndex][cellIndex] || ''}
                    onChange={(e) => {
                      if (isValid(e.target.value)) {
                        dispatch(actionBoard.updateCellInBoard({ num: Number(e.target.value), rowIndex, cellIndex }))
                      } else {
                        dispatch(actionSnackBar.setSnackBar('error', `The value: '${e.target.value}' is not valid`, 3000))
                      }
                    }}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
