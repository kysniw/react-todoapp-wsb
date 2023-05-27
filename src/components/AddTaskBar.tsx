import React, { SyntheticEvent, useContext, useState } from "react";
import "./AddTaskBar.css";
import TasksContext from "../context/TasksContext";

function AddTaskBar() {
  const [text, setText] = useState<string>("");

  const { createTask } = useContext(TasksContext);

  const handleAddTaskSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (text.length > 2) {
      createTask(text);
      setText("");
    }
  };

  return (
    <div className="add-task">
      <h3 className="add-task__title">Dodaj zadanie</h3>
      <form className="add-task__form" onSubmit={handleAddTaskSubmit}>
        <input
          className="add-task__input"
          type="text"
          placeholder="Wpisz zadanie..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
}

export default AddTaskBar;
