import React, { useContext } from "react";
import "./TaskRow.css";
import { FaTrash, FaCheck } from "react-icons/fa";
import Task from "../interfaces/Task";
import TasksContext from "../context/TasksContext";

type Props = {
  task: Task;
};

function TaskRow({ task }: Props) {
  const { toggleIsDoneTask, deleteTask } = useContext(TasksContext);

  const handleIsDone = () => {
    toggleIsDoneTask(task.id, task.isDone);
  };

  const isDoneRowClass = task.isDone ? " is-done-row" : "";
  const isDoneTextClass = task.isDone ? " is-done" : "";
  const isDoneButtonClass = task.isDone ? " is-done-btn" : "";

  return (
    <div className={"task-row" + isDoneRowClass}>
      <div className="task-row__left-side">
        <button
          onClick={handleIsDone}
          className={"task-row__done-button task-btn" + isDoneButtonClass}
        >
          <FaCheck className="done-icon" />
        </button>
        <p className={"task-row__text" + isDoneTextClass}>{task.taskText}</p>
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="task-row__delete-button task-btn"
      >
        <FaTrash className="delete-icon" />
      </button>
    </div>
  );
}

export default TaskRow;
