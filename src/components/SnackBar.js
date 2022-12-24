import * as React from 'react'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import * as actionSnackBar from '../redux/SnackBar/snackBarSlice'

const Alert =
  React.forwardRef <
  HTMLDivElement >
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
  }

export default function CustomizedSnackbars() {
  const dispatch = useDispatch()
  const snackBarOBJ = useSelector((state) => state.snackbar)
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(actionSnackBar.disableSnackBar())
  }

  //TODO
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      {/* 
      <Snackbar open={snackBarOBJ.visible} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
      <Alert severity='error'>This is an error message!</Alert>
      <Alert severity='warning'>This is a warning message!</Alert>
      <Alert severity='info'>This is an information message!</Alert>
      <Alert severity='success'>This is a success message!</Alert>  */}
    </Stack>
  )
}
