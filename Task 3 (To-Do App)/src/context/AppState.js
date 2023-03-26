import { useState } from "react";
import AppContext from "./AppContext";
import { v4 as uuid } from 'uuid';

const AppState = (props) => {

  const [data, setData] = useState([]);

  const getTaskList = () => {
    // return window.localStorage.removeItem("todoList")
    const taskList = window.localStorage.getItem("todoList");
    if (taskList) {
      return JSON.parse(taskList);
    } else {
      return window.localStorage.setItem("todoList", []);
    }
    
  };

  const addTask = (task) => {
    var id = uuid();
    let newtask = { id: id, task: task, status: "Incomplete" };

    if(getTaskList()){
    setData(getTaskList())}
    else{
      setData([])
    }
    data.push(newtask);
    const taskList = window.localStorage.getItem("todoList");
    if (taskList) {
      const newTaskList = JSON.parse(taskList);
      newTaskList.push({
        ...newtask
      });
      window.localStorage.setItem("todoList", JSON.stringify(newTaskList));
    } else {
      window.localStorage.setItem(
        "todoList",
        JSON.stringify([
          {
            ...newtask
          }
        ])
      );
    }
  };

  const changeStatus = (id, status) => {
    const taskList = window.localStorage.getItem("todoList");
    if (taskList) {
      const newTaskList = JSON.parse(taskList);
      newTaskList.forEach((t) => {
        if (t.id === id) {
          t.status = status;
        }
      });
      window.localStorage.setItem("todoList", JSON.stringify(newTaskList));
      setData([...newTaskList]);
    }
  };

  return (
    <AppContext.Provider value={{ data, addTask, changeStatus, getTaskList}}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
