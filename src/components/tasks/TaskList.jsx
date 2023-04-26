import React from "react";
import { Task } from "./Task";

export const TaskList = ({
  tasks,
  setTask,
  deleteTask,
  editTask,
  taskPrio,
  taskStatus,
}) => {
  return (
    <div className="task-container">
      {tasks.length === 0 && "No Tasks"}
      {tasks.map((task) => {
        return <Task key={task.id} {...task} deleteTask={deleteTask} />;
      })}
    </div>
  );
};
