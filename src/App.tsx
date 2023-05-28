import React, { useContext, useEffect } from "react";
import "./App.css";
import AddTaskBar from "./components/AddTaskBar";
import TasksList from "./components/TasksList";

import TasksContext from "./context/TasksContext";
import ThemeButton from "./components/ThemeButton";

function App() {
  const { getTasks } = useContext(TasksContext);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <div className="app-container app-container--dark-mode">
      <ThemeButton />
      <div className="todo-app">
        <AddTaskBar />
        <TasksList />
      </div>
    </div>
  );
}

export default App;
