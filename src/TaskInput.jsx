import { useState } from 'react'
import './App.css'

function TaskInput({ onAdd }) {
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Adicione uma tarefa..."
        aria-label="Nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default TaskInput
