import React, { useState } from "react";

const Task = ({ task, removeTask }) => {
  const [done, setDone] = useState(false);
  const markDone = () => {
    setDone(!done);
  };
  return (
    <li
      className={`flex justify-between p-2 m-1 rounded-lg ${
        done ? "bg-gray-100 shadow-inner" : "shadow"
      }`}
    >
      <p className={done ? "line-through italic opacity-50" : ""}>
        {task.title}
      </p>
      <div className="w-1/5 flex justify-between">
        <button
          name={task.id}
          className={`text-green-500 ${done ? "italic opacity-50" : ""}`}
          onClick={markDone}
        >
          Done
        </button>
        <button
          name={task.id}
          className={`text-red-500 ${done ? "italic opacity-50" : ""}`}
          onClick={removeTask}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default Task;
