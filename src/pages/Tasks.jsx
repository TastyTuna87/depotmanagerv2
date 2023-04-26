import React from "react";
import { useState, useEffect } from "react";
import { TaskList } from "../components/tasks/TaskList";
import SearchBar from "../components/SearchBar";

const Tasks = () => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [tasksList, setTasksList] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(tasksList));
  }, [tasksList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasksList((currentTask) => {
      return [
        ...currentTask,
        { id: crypto.randomUUID(), title: title, task: task, completed: false },
      ];
    });
    setTask("");
    setTitle("");
  };
  const deleteTask = (id) => {
    setTasksList((currentTask) => {
      return currentTask.filter((task) => task.id !== id);
    });
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredTasks = tasksList.filter((task) => {
    return task.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <>
      <h1>Tasks</h1>
      <div className="input-container">
        <form className="task-form" onSubmit={handleSubmit}>
          <label className="task-label" htmlFor="">
            Task:
            <input
              className="input"
              type="text"
              value={title}
              name="name"
              placeholder="Title..."
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="text-area"
              name=""
              id=""
              cols="30"
              rows="10"
              value={task}
              placeholder="Task..."
              onChange={(e) => setTask(e.target.value)}
            ></textarea>
          </label>
          <input
            className="submit-input"
            type="submit"
            value="Add"
            disabled={!title || !task}
          />
        </form>
      </div>
      <div className="searchbar-container">
        <SearchBar searchChange={handleSearch} />
      </div>
      <div>
        <TaskList
          tasks={filteredTasks}
          setTask={setTasksList}
          deleteTask={deleteTask}
        />
      </div>
    </>
  );
};

export default Tasks;
