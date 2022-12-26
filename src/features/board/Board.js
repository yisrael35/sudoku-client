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

const isValid = (num) => {
  return /^([1-9])$/.test(num)
}
export function Board() {
  const dispatch = useDispatch()
  //TODO

  // const test = [
  //   [5, 3, 0, 0, 7, 0, 0, 0, 0],
  //   [6, 0, 0, 1, 9, 5, 0, 0, 0],
  //   [0, 9, 8, 0, 0, 0, 0, 6, 0],
  //   [8, 0, 0, 0, 6, 0, 0, 0, 3],
  //   [4, 0, 0, 8, 0, 3, 0, 0, 1],
  //   [7, 0, 0, 0, 2, 0, 0, 0, 6],
  //   [0, 6, 0, 0, 0, 0, 2, 8, 0],
  //   [0, 0, 0, 4, 1, 9, 0, 0, 5],
  //   [3, 4, 5, 2, 8, 0, 0, 7, 9],
  // ]
  // const [board, setBoard] = useState(test)
  const board = useSelector((state) => state.board.board)
  // console.log(boardFromSlice, 'boardFromSlice')
  // const [board, setBoard] = useState(boardFromSlice)

  // useEffect(() => {
  //   console.log(board)
  //   setBoard(boardFromSlice)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [boardFromSlice])

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
                        board[rowIndex][cellIndex] = Number(e.target.value)
                        // setBoard([...board])
                      } else {
                        //TODO -- display error char
                        dispatch(actionSnackBar.setSnackBar('error', `server_error`, 3000))
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
