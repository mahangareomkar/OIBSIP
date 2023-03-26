import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import Task from "./Task";

const TaskList = (props) => {

  return (
    <div id="TaskList">
      {props.tasks && props.tasks.map((element) => {
        return (
          <Task key={element.id} id={element.id}  task={element.task} status={element.status} />
        );
      })}
    </div>
  );
};

export default TaskList;
