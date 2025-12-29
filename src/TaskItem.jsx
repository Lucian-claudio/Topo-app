function TaskItem({ task, index, onRemove, onToggle }) {
  return (
    <li className="task-item">
      <label className="task-label">
        <input
          type="checkbox"
          checked={!!task.done}
          onChange={() => onToggle(index)}
        />
        <span className={`task-text ${task.done ? 'done' : ''}`}>{task.text}</span>
      </label>
      <button className="task-remove" onClick={() => onRemove(index)} aria-label={`Remover tarefa ${index}`}>
        Remover
      </button>
    </li>
  )
}

export default TaskItem
