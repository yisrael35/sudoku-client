import * as React from 'react'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import * as actionSnackBar from '../redux/SnackBar/snackBarSlice'

export default function CustomizedSnackbars() {
  const dispatch = useDispatch()
  const snackBarOBJ = useSelector((state) => state.snackbar)
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(actionSnackBar.disableSnackBar())
  }

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={snackBarOBJ.visible} autoHideDuration={snackBarOBJ.timeout} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackBarOBJ.type} sx={{ width: '100%' }}>
          {snackBarOBJ.message}
        </Alert>
      </Snackbar>
    </Stack>
  )
}
