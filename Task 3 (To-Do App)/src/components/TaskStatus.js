import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import TaskList from "./TaskList";

const TaskStatus = () => {
  const { data, getTaskList } = useContext(AppContext);

  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("All Tasks")


  const [display, setDisplay] = useState([]);

  useEffect(() => {
    var getTask = getTaskList();
    if (getTask) {
      setTasks([...getTask.reverse()])
      setDisplay(getTask.reverse())
    }

    ;
  }, [data]);

  useEffect(() => {
    if (status === 'AllTasks') {
      setDisplay(tasks)
    }
    else if (status === 'IncompleteTasks') {
      setDisplay(tasks.filter((t) => { if (t.status === 'Incomplete') { return t } }))
    }
    else if (status === 'CompletedTasks') {
      setDisplay(tasks.filter((t) => { return (t.status === 'Completed') }))
    }
  }, [status, tasks]
  )

  const statusHandler = (e) => {
    let span = document.querySelectorAll(".StatusBar");
    span.forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
    setStatus(e.target.id)
  };

  return (
    <>
      <div id="TaskStatus">
        <span id="AllTasks" onClick={statusHandler} className="StatusBar active">
          All Tasks
        </span>
        <span id="IncompleteTasks" onClick={statusHandler} className="StatusBar">
          Incomplete Tasks
        </span>
        <span id="CompletedTasks" onClick={statusHandler} className="StatusBar">
          Completed Tasks
        </span>
      </div>
      <TaskList tasks={display} />
    </>
  );
};

export default TaskStatus;
