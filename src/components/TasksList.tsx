import React, { useContext } from "react";
import "./TasksList.css";
import Task from "../interfaces/Task";
import TaskRow from "./TaskRow";
import TasksContext from "../context/TasksContext";

export type Props = {
  tasks: Task[];
};

function TasksList() {
  const { tasks } = useContext(TasksContext);

  const renderedTasks = tasks.map((task) => {
    return <TaskRow key={task.id} task={task} />;
  });

  return <div className="tasks-list">{renderedTasks}</div>;
}

export default TasksList;
