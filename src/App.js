import { useEffect, useState } from 'react';
import './App.css';
import CreateTask from './components/createTask';
import ListTask from './components/taskList';
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Navbar from './components/Navbar';
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  return (
    <>
      <div className='app'>
        <div className='navbar-container'><Navbar /></div>
        <div className='create-task-container'><CreateTask tasks={tasks} setTasks={setTasks}/></div>
      </div>
      <div className='task-list-container'>
        <DndProvider backend={HTML5Backend}>
          <Toaster /> 
          <ListTask tasks={tasks} setTasks={setTasks}/>
        </DndProvider>
      </div>
    </>
  );
}

export default App;
