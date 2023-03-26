import { useContext, useState } from "react";
import AppContext from "../context/AppContext";

const Task = (props) => {
  const [Status, setStatus] = useState(props.status);

  const {changeStatus} = useContext(AppContext)

  const statusHandler = async(e) => {
    const status = e.target.className.slice(10);
    const nstatus = status === "Completed" ? "Incomplete" : "Completed";
    setStatus(nstatus);
    await changeStatus(props.id,nstatus)
  };

  return (
    <div className="Task">
      <p>{props.task}</p>
      <span id="key" className={`statusTag ${Status}`} onClick={statusHandler}>
        {Status}
      </span>
    </div>
  );
};

export default Task;
