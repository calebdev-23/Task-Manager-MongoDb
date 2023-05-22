import Task from "./Task";

const TaskList = () =>{
    return (
     <div className="taskList">
         <div className={"d-flex justify-content-between"}>
             <p><span>Total Tasks: </span>5</p>
             <p><span>Completed Tasks: </span>6</p>
         </div>
         <Task/>
     </div>
    )
}
export default TaskList