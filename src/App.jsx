import { useState } from 'react'
import './App.css'
import TaskList from './components/container/TaskList'
import { TaskProvider } from './context/TaskContext'

function App() {
  return (
    <TaskProvider>
      <TaskList />
    </TaskProvider>
  )
}

export default App;
