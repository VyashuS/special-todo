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

  const pendingTasks = tasks.length
    ? tasks.filter((task) => !task.completed)
    : [{ id: 1, text: "Complete the project", completed: false }];
  const completedTasks = tasks.length
    ? tasks.filter((task) => task.completed)
    : [{ id: 2, text: "Write unit tests", completed: true }];

  return (
    <div className="task-list w-full">
      <div className="pending-tasks mb-8">
        <h2 className="text-3xl font-bold mb-6">Pending Tasks</h2>
        {pendingTasks.map((task) => (
          <div
            key={task.id}
            className={`task-item flex justify-between items-center p-4 mb-4 border ${
              task.completed ? "bg-green-100" : "bg-white"
            } rounded`}
          >
            <div className="task-left flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
                className="task-checkbox mr-4"
              />
              <span
                className="task-text text-xl"
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "gray" : "black",
                }}
              >
                {task.text}
              </span>
            </div>
            <button
              className="delete-btn text-red-500 hover:text-red-700 ml-6 text-xl"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="completed-tasks">
        <h2 className="text-3xl font-bold mb-6">Completed Tasks</h2>
        {completedTasks.map((task) => (
          <div
            key={task.id}
            className={`task-item flex justify-between items-center p-4 mb-4 border ${
              task.completed ? "bg-green-100" : "bg-white"
            } rounded`}
          >
            <div className="task-left flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
                className="task-checkbox mr-4"
              />
              <span
                className="task-text text-xl"
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "gray" : "black",
                }}
              >
                {task.text}
              </span>
            </div>
            <button
              className="delete-btn text-red-500 hover:text-red-700 ml-6 text-xl"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
