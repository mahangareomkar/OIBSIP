import { useContext, useState } from "react";
import AppContext from "../context/AppContext";

const AddTask = () => {
  const [task, setTask] = useState("");

  const context = useContext(AppContext);

  const { addTask } = context;

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTask(task);
  };

  return (
    <div id="AddTask">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Add Task"
          id="AddTaskArea"
          value={task}
          onChange={changeHandler}
          autocomplete="off"
        />
        <input type="submit" value="Add" id="AddButton" />
      </form>
    </div>
  );
};

export default AddTask;
