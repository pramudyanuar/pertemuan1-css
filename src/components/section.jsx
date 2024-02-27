import React from "react";
import { useDrop } from "react-dnd";
import Task from "./task";
import Header from "./header";
import "../index.css";

const Section = ({ status, tasks, setTasks, deleteStatus }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItem(item.id, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));

  const addItem = (id, newStatus) => {
    setTasks((prev) => {
      const updated = prev.map((task) => {
        if (task.id === id) {
          task.status = newStatus;
        }
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(updated));
      return updated;
    });
  };

  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <div ref={drop} className={`section ${isOver ? "section-highlight" : ""}`}>
      <Header text={status} count={filteredTasks.length} deleteStatus={deleteStatus} />
      {filteredTasks.length > 0 &&
        filteredTasks.map((task) => (
          <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
    </div>
  );
};

export default Section;
