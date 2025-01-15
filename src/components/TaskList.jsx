import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleComplete } from "../redux/taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="task-list p-4 mt-4 bg-gray-100 max-w-4xl mx-auto rounded-lg shadow-lg">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`task-item flex items-center justify-between p-2 mb-2 border-b border-gray-200 ${
            task.completed ? "bg-green-100" : "bg-white"
          } rounded`}
        >
          <div className="task-left flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
              className="task-checkbox mr-2"
            />
            <span
              className="task-text"
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "gray" : "black",
              }}
            >
              {task.text}
            </span>
          </div>
          <button
            className="delete-btn text-red-500 hover:text-red-700 ml-4"
            onClick={() => handleDelete(task.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
