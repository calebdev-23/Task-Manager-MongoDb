import {useState} from "react";

const TaskForm = () =>{
    const [name, setName] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    const handleChange = (e) =>{
        setName(e.target.value)
    }
    console.log(name)
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