import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Toaster from "react-hot-toast";

const CreateTask = ({tasks, setTasks}) => {

  const [task, setTask] = useState({
    id: "",
    content: "",
    status: "todo",
  });

  console.log(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(task.content.length < 3) return Toaster.error("Task must be at least 3 characters long");
    if(task.content.length > 100) return Toaster.error("Task must be at most 100 characters long");
    setTasks((prev) => {
      const list = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });
    Toaster.success("Task created");
    setTask({ id: "", content: "", status: "todo" });
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-end relative">
      <input 
        type="text" 
        className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1" 
        value={task.content}
        onChange={(e) => setTask({ ...task, id: uuidv4(), content: e.target.value})}
      />
      <button className="bg-cyan-500 rounded-md px-4 h-12 text-white">Create</button>
    </form>
  );
}

export default CreateTask;