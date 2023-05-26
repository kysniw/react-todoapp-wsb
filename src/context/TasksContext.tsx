import { createContext, useState, useCallback } from "react";
import Task from "../interfaces/Task";
import axios from "axios";

type TaskContextValues = {
  tasks: Task[];
  getTasks: () => void;
  createTask: (taskText: string) => void;
  toggleIsDoneTask: (id: number, isDone: boolean) => void;
  deleteTask: (id: number) => void;
};

const TasksContext = createContext<TaskContextValues>({
  tasks: [],
  getTasks: () => {},
  createTask: () => {},
  toggleIsDoneTask: () => {},
  deleteTask: () => {},
});

type ProviderProps = {
  children: React.ReactNode;
};

function Provider({ children }: ProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = useCallback(async () => {
    const response = await axios.get("http://127.0.0.1:3001/tasksList");
    setTasks(response.data);
  }, []);

  const createTask = async (taskText: string) => {
    const response = await axios.post("http://127.0.0.1:3001/tasksList", {
      taskText,
      isDone: false,
    });

    const updatedTasks = [...tasks, response.data];
    setTasks(updatedTasks);
  };

  const toggleIsDoneTask = async (id: number, isDone: boolean) => {
    const response = await axios.patch(
      `http://127.0.0.1:3001/tasksList/${id}`,
      {
        isDone: !isDone,
      }
    );

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) return { ...task, ...response.data };

      return task;
    });

    setTasks(updatedTasks);
  };

  const deleteTask = async (id: number) => {
    await axios.delete(`http://127.0.0.1:3001/tasksList/${id}`);
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(updatedTasks);
  };

  const contextValues = {
    tasks,
    getTasks,
    createTask,
    toggleIsDoneTask,
    deleteTask,
  };

  return (
    <TasksContext.Provider value={contextValues}>
      {children}
    </TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;
