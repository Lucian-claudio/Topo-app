import TaskItem from "./TaskItem";

function TaskList({ tasks, onRemove, onToggle }) {
  return (
    <ul className="w-full max-w-md">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

export default TaskList;