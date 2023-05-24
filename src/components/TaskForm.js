import {useState} from "react";
import axios from "axios";
import {ToastError, ToastErrorValidation, ToastSuccess} from "../Notification/Toastify";
const TaskForm = ({task, setTask, initialState}) =>{
    const [loading, setLoading] = useState(false)
    const URL = process.env.REACT_APP_SERVER_URL
    const handleSubmit = async(e) =>{
        e.preventDefault()
        if(task.name === ""){
            ToastErrorValidation()
        }else{
            try {
                setLoading(true)
                await axios.post(`${URL}/api/tasks`, task)
                setLoading(false)
                ToastSuccess()
                setTask(initialState)
            }catch (error){
                ToastError(error.message)
                setLoading(false)
                setTask(initialState)
            }
        }
    }
    const handleChange = (e) =>{
        setTask({...task, name: e.target.value})
    }
    console.log(task.name)
    return (
        <div className={"taskForm"} onSubmit={handleSubmit}>
            <form action="">
                <div className={"d-flex my-3"}>
                    <input className={`form-control`} type="text" placeholder="Add task" value={task.name} onChange={handleChange} disabled={loading?true: ""} />
                    <button className={`btn ${loading? "disabled": ""}`}>
                        {loading? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : "" } ADD
                    </button>
                </div>
            </form>
        </div>
    )
}
export default TaskForm