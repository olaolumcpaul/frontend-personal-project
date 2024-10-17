import { useState, useEffect } from "react";
import Header from "./Header";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [searchFilter, setSearchFilter] = useState("");
  const [customCategories, setCustomCategories] = useState([
    "Personal",
    "Work",
  ]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { id: Date.now(), ...task, completed: false };
    setTasks([...tasks, newTask]);
  };

  const addCategory = (categoryName) => {
    setCustomCategories([...customCategories, categoryName]);
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Function to determine if the search input is a date format (YYYY-MM-DD)
  const isDateInput = (input) => /\d{4}-\d{2}-\d{2}/.test(input);

  // Function to determine if the search input is a priority
  const isPriorityInput = (input) =>
    ["high", "medium", "low"].includes(input.toLowerCase());

  // Function to check if the input matches a category (including custom categories)
  const isCategoryInput = (input) =>
    customCategories.some(
      (category) => category.toLowerCase() === input.toLowerCase()
    );

  // Sorting tasks by due date (nearest on top) and placing tasks without a due date at the end
  const sortedTasks = tasks.sort((a, b) => {
    if (!a.dueDate) return 1; // a has no due date, move to the bottom
    if (!b.dueDate) return -1; // b has no due date, move to the bottom
    return new Date(a.dueDate) - new Date(b.dueDate); // sort by date (ascending)
  });

  // Apply flexible filtering logic for task, priority, date, or category
  const filteredTasks = sortedTasks.filter((task) => {
    const lowerSearch = searchFilter.toLowerCase().trim(); // Ensure trimmed input

    // Check if input matches a priority
    if (isPriorityInput(lowerSearch)) {
      return task.priority.toLowerCase() === lowerSearch;
    }

    // Check if input matches a date
    if (isDateInput(searchFilter)) {
      return task.dueDate === searchFilter;
    }

    // Check if input matches a category
    if (isCategoryInput(lowerSearch)) {
      return task.category.toLowerCase() === lowerSearch;
    }

    // Otherwise, search in the task text
    return task.text.toLowerCase().includes(lowerSearch);
  });

  return (
    <div className="app">
      <Header setSearchFilter={setSearchFilter} />
      <TaskInput
        addTask={addTask}
        customCategories={customCategories}
        addCategory={addCategory}
      />

      <section className="task-list-section">
        <h2>Your Tasks</h2>
        <TaskList
          tasks={filteredTasks}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      </section>
    </div>
  );
}

export default App;
