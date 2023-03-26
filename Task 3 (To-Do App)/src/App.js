import AddTask from "./components/AddTask";
import NavBar from "./components/NavBar";
import TaskStatus from "./components/TaskStatus";
import AppState from "./context/AppState";
import "./styles.css";

export default function App() {
  return (
    <AppState>
      <div className="App">
        <NavBar />
        <AddTask />
        <TaskStatus />
      </div>
    </AppState>
  );
}
