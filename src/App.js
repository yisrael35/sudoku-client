import React from 'react'
// import logo from './logo.svg';
import { BoardButtons } from './features/board/BoardButtons'
import './App.css'
import { Board } from './features/board/Board'
import SnackBar from './components/SnackBar'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <SnackBar />

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Board />
        <BoardButtons />
      </header>
    </div>
  )
}

export default App
