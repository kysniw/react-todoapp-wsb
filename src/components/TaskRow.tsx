import React from "react";
import "./TaskRow.css";
import Task from "../interfaces/Task";

type Props = {
  task: Task;
};

function TaskRow({ task }: Props) {
  return <div className="task-row">{task.taskText}</div>;
}

export default TaskRow;
