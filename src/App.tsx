import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import AddTaskBar from "./components/AddTaskBar";
import TasksList from "./components/TasksList";

import TasksContext from "./context/TasksContext";
import ThemeButton from "./components/ThemeButton";

function App() {
  const { getTasks } = useContext(TasksContext);

  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const handleThemeChange = (isDarkHandled: boolean) => {
    setIsDark(isDarkHandled);
  };

  const themeClass = isDark ? "--dark-mode" : "--light-mode";

  return (
    <div className={"app-container app-container" + themeClass}>
      <ThemeButton isDark={isDark} onDarkThemeChange={handleThemeChange} />
      <div className={"todo-app todo-app" + themeClass}>
        <AddTaskBar />
        <TasksList />
      </div>
    </div>
  );
}

export default App;
