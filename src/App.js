import './App.scss';
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import {useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
function App() {
    const initialState = {
        name: "",
        completed:false
    }
    const [task, setTask] = useState(initialState)
  return (
    <div className="app">
        <ToastContainer/>
       <div className="row justify-content-center mt-5">
           <div className="col-9">
               <h2>Task Manager</h2>
               <TaskForm task={task} setTask={setTask} initialState={initialState}/>
               <TaskList/>
           </div>
       </div>
    </div>
  );
}

export default App;
