import React, { useState } from "react";
import Task from "./Task";

const TaskList = () => {
  const [newTask, setNewTask] = useState("");
  const [taskId, setTaskId] = useState(0);
  const [tasks, setTasks] = useState([]);
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const addTask = () => {
    newTask && setTasks([...tasks, { id: `t${taskId}`, title: newTask }]);
    setTaskId((prevTaskId) => prevTaskId + 1);
    setNewTask("");
  };
  const removeTask = (e) => {
    setTasks(tasks.filter((task) => task.id !== e.target.name));
  };
  const removeAllTasks = () => {
    setTasks([]);
  };
  return (
    <div className="tasks w-1/3">
      <div className="top p-2 rounded-lg bg-white mb-2">
        <form
          className="add-task border-2 border-black rounded-lg flex justify-center items-center w-full h-14 p-1"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="p-2 w-10/12"
            value={newTask}
            onChange={handleChange}
          />
          <button
            className="bg-green-500 text-white rounded-lg p-2 w-2/12 h-full"
            onClick={addTask}
          >
            Add
          </button>
        </form>
      </div>
      {tasks.length !== 0 && (
        <div className="bottom p-1 rounded-lg bg-white mt-2">
          <ul className="max-h-96 overflow-scroll">
            {tasks.map((task) => {
              return <Task key={task.id} task={task} removeTask={removeTask} />;
            })}
          </ul>
          <div className="w-full p-1 flex justify-end">
            <button className="p-2 text-red-500" onClick={removeAllTasks}>
              Remove All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
