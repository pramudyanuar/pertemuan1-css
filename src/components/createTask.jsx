import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Toaster from "react-hot-toast";
import "../index.css";

const CreateTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: "",
    content: "",
    status: "todo",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.content.length < 3) return Toaster.error("Task must be at least 3 characters long");
    if (task.content.length > 100) return Toaster.error("Task must be at most 100 characters long");
    setTasks((prev) => {
      const list = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });
    Toaster.success("Task created");
    setTask({ id: "", content: "", status: "todo" });
  };

  return (
    <div className="create-task-form-container">
      <form onSubmit={handleSubmit} className="create-task-form">
        <input
          type="text"
          className="create-task-input"
          value={task.content}
          onChange={(e) => setTask({ ...task, id: uuidv4(), content: e.target.value })}
        />
        <button className="create-task-button">Create</button>
      </form>
    </div>
  );
};

export default CreateTask;
