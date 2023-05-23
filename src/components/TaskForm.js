import {useState} from "react";
import { toast} from 'react-toastify';
import axios from "axios";
const TaskForm = ({task, setTask, initialState}) =>{
    const [loading, setLoading] = useState(false)
    const URL = process.env.REACT_APP_SERVER_URL
    const handleSubmit = async(e) =>{
        e.preventDefault()
        if(task.name === ""){
            toast.error("Veuiller completer votre formulaire", {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }else{
            try {
                setLoading(true)
                await axios.post(`${URL}/api/tasks`, task)
                setLoading(false)
                toast.success('Task added!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setTask(initialState)
            }catch (error){
                toast.error(error.message,{
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
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
                    <input className="form-control" type="text" placeholder="Add task" value={task.name} onChange={handleChange}/>
                    <button className={`btn ${loading? "disabled": ""}`}>
                        {loading? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : "" } ADD
                    </button>
                </div>
            </form>
        </div>
    )
}
export default TaskForm