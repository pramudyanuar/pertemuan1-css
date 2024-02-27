import React, { useEffect, useState } from "react";
import Section from "./section";
import "../index.css";

const ListTask = ({ tasks, setTasks }) => {
  const [statuses, setStatuses] = useState(() => {
    const savedStatuses = localStorage.getItem("statuses");
    return savedStatuses ? JSON.parse(savedStatuses) : ["todo", "inprogress", "done"];
  });

  useEffect(() => {
    const savedStatuses = JSON.stringify(statuses);
    localStorage.setItem("statuses", savedStatuses);
  }, [statuses]);

  useEffect(() => {
    const fTasks = tasks.filter((task) => statuses.includes(task.status));
    setTasks(fTasks);
  }, [tasks, statuses, setTasks]);

  const addStatus = () => {
    const newStatus = prompt("Enter a new status:");
    if (newStatus && newStatus.trim() !== "" && !statuses.includes(newStatus)) {
      setStatuses([...statuses, newStatus]);
    }
  };

  const deleteStatus = (statusToDelete) => {
    const updatedStatuses = statuses.filter((status) => status !== statusToDelete);
    setStatuses(updatedStatuses);
  };

  return (
    <div className="list-task">
      {statuses.map((status, index) => (
        <Section key={index} status={status} tasks={tasks} setTasks={setTasks} deleteStatus={deleteStatus} />
      ))}
      <button className="add-status-button" onClick={addStatus}>Add New Status</button>
    </div>
  );
};

export default ListTask;
