import React from 'react'
import logo from './logo2.webp'
import { BoardButtons } from './features/board/BoardButtons'
import './App.css'
import { Board } from './features/board/Board'
import SnackBar from './components/SnackBar'
import { Grid, Box } from '@mui/material'

function App() {
  return (
    <div className='App' style={{ backgroundColor: 'lightcyan' }}>
      <SnackBar />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Grid container justifyContent='center' alignItems='center' spacing={10}>
          <Grid item>
            <Box sx='auto'>
              <BoardButtons />
            </Box>
          </Grid>
          <Grid item>
            <Board />
          </Grid>
        </Grid>
      </header>
    </div>
  )
}

export default App
