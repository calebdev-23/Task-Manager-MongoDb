import './App.scss';
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
function App() {
  return (
    <div className="app">
       <div className="row justify-content-center mt-5">
           <div className="col-9">
               <h2>Task Manager</h2>
               <TaskForm/>
               <TaskList/>
           </div>
       </div>
    </div>
  );
}

export default App;
