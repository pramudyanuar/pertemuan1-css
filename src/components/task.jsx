import React from "react";
import { useDrag } from "react-dnd";
import toast from "react-hot-toast";
import "../index.css";

const Task = ({ task, tasks, setTasks }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  const handleRemove = (id) => {
    const removed = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(removed));
    setTasks(removed);
    toast.success("Task removed");
  };

  const handleEdit = (id) => {
    const edited = tasks.map((task) => {
      if (task.id === id) {
        const content = prompt("Edit task", task.content);
        if (content.length < 3) return toast.error("Task must be at least 3 characters long");
        if (content.length > 100) return toast.error("Task must be at most 100 characters long");
        task.content = content;
      }
      return task;
    });
    localStorage.setItem("tasks", JSON.stringify(edited));
    setTasks(edited);
  };

  return (
    <div ref={drag} className={`task ${isDragging ? "task-dragging" : ""}`}>
      <p>{task.content}</p>
      <button onClick={() => handleEdit(task.id)}>✏️</button>
      <button onClick={() => handleRemove(task.id)}>❌</button>
    </div>
  );
};

export default Task;
