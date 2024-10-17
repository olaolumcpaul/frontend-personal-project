import PropTypes from "prop-types";

const TaskItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  // Assign a class based on priority
  const priorityClass =
    task.priority === "High"
      ? "high-priority"
      : task.priority === "Low"
      ? "low-priority"
      : "normal-priority";

  return (
    <li
      className={`task-item ${priorityClass} ${
        task.completed ? "completed" : ""
      }`}
    >
      <span className="task-text" onClick={() => toggleTaskCompletion(task.id)}>
        {task.completed ? "✔️" : "⬜️"} {task.text}
      </span>
      <span className="task-details">
        {task.priority} | {task.category} | Due: {task.dueDate}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskItem;
