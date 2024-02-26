import { useEffect, useState } from 'react';
import './App.css';
import CreateTask from './components/createTask';
import ListTask from './components/taskList';
import {Toaster} from 'react-hot-toast';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Navbar from './components/Navbar';


function App() {
  const [tasks, setTasks] = useState([]);
  console.log("tasks", tasks);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  return (
    <>
      <div className='pb-[76px] flex flex-col'>
        <div className='-z-10'><Navbar /></div>
        <div className='pt-3 pr-4'><CreateTask tasks={tasks} setTasks={setTasks}/></div>
      </div>
      <div>
        <DndProvider backend={HTML5Backend}>
          <Toaster /> 
          <div className= "flex flex-col items-center p-3 gap-16">
            <ListTask tasks={tasks} setTasks={setTasks}/>
          </div>
        </DndProvider>
      </div>
    </>
  );
}

export default App;
