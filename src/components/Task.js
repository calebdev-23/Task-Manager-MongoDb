import {FaEdit, FaCheck, FaTrashAlt} from "react-icons/fa";

const Task = () =>{
    return (
        <div className={"task mt-3"}>
            <li className={"list-unstyled"}>
                <div className="row justify-content-sm-between  align-items: center; py-3 ">
                    <div className="col-6 col-sm-4">
                        <p className={"mb-0"}>Task One</p>
                    </div>
                    <div className="col-6 col-sm-4 text-end text-sm-end text-lg-end">
                        <FaCheck color={"green"}/>
                        <FaEdit color={"blue"} className={"mx-2"}/>
                        <FaTrashAlt color={"red"}/>
                    </div>
                </div>
            </li>
        </div>
    )
}
export default Task