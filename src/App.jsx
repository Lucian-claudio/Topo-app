import { useState } from 'react'
import './App.css'
import TaskInput from './TaskInput'
import TaskList from './TaskList'

function App() {
  const [tasks, setTasks] = useState([])

  function addTask(text) {
    setTasks((prev) => [...prev, { text, done: false }])
  }

  function removeTask(index) {
    setTasks((prev) => prev.filter((_, i) => i !== index))
  }

  function toggleTask(index) {
    setTasks((prev) =>
      prev.map((t, i) => (i === index ? { ...t, done: !t.done } : t)),
    )
  }

  return (
    <div className="app-container">
      <h1>Minhas Tarefas</h1>
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} onRemove={removeTask} onToggle={toggleTask} />
    </div>
  )
}

export default App
