import { useState } from "react";
import PropTypes from "prop-types";

const TaskInput = ({ addTask, customCategories, addCategory }) => {
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Personal");
  const [dueDate, setDueDate] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [isAddingCategory, setIsAddingCategory] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask({
        text: taskText,
        priority,
        category: category === "Add New Category" ? newCategory : category,
        dueDate,
      });
      setTaskText("");
      setPriority("Medium");
      setCategory("Personal");
      setDueDate("");
      setNewCategory("");
      setIsAddingCategory(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        placeholder="Enter a new task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {customCategories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
        <option value="Add New Category">Add New Category</option>
      </select>

      {category === "Add New Category" && (
        <div>
          <input
            type="text"
            placeholder="New category name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              if (newCategory.trim()) {
                addCategory(newCategory);
                setIsAddingCategory(false);
                setCategory(newCategory);
              }
            }}
          >
            Add Category
          </button>
        </div>
      )}

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

TaskInput.propTypes = {
  addTask: PropTypes.func.isRequired,
  customCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  addCategory: PropTypes.func.isRequired,
};

export default TaskInput;
