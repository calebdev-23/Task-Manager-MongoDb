import {useState} from "react";
import { toast,ToastContainer } from 'react-toastify';
import axios from "axios";

const TaskForm = ({task, setTask, initialState}) =>{
    const [name, setName] = useState("")
    const handleSubmit = async(e) =>{
        e.preventDefault()
        if(name === ""){
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
                await axios.post("http://localhost:3000/api/tasks", task)
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
                setName("")
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
                setName("")
                setTask(initialState)
            }
        }
    }
    const handleChange = (e) =>{
        setName(e.target.value)
        setTask({...task, name: name})
    }
    return (
        <div className={"taskForm"} onSubmit={handleSubmit}>
            <form action="">
                <div className={"d-flex my-3"}>
                    <input className="form-control" type="text" placeholder="Add task" value={name} onChange={handleChange}/>
                    <button className={"btn"}>ADD</button>
                </div>
            </form>
        </div>
    )
}
export default TaskForm