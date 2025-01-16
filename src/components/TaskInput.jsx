import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { Bell, Repeat, Calendar } from "lucide-react";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(
        addTask({
          id: Date.now(),
          text: task,
          priority: priority,
          dueDate: dueDate,
          completed: false,
          createdAt: new Date().toISOString(),
        })
      );
      resetForm();
    }
  };

  const resetForm = () => {
    setTask("");
    setPriority("Medium");
    setDueDate("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="w-full max-w-8xl mx-auto bg-gray-50 p-6 lg:p-8">
      <form
        className="w-full"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTask();
        }}
      >
        <div className="mb-6">
          <div className="text-gray-600 mb-2 font-bold text-2xl">
            Add A Task
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4 bg-white rounded-lg p-4 shadow-md">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add a new task"
              className="flex-grow bg-transparent outline-none text-gray-800 text-xl sm:text-2xl"
              required
            />
            <div className="flex items-center gap-4">
              <Bell className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600" />
              <Repeat className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600" />
              <Calendar className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600" />
              <button
                type="submit"
                className="px-5 py-2 bg-green-100 text-green-700 text-xl sm:text-2xl rounded-lg hover:bg-green-200 transition-colors"
              >
                ADD TASK
              </button>
            </div>
          </div>
        </div>

        <div className="hidden">
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="px-3 py-2 border rounded-lg mr-2 text-lg"
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="px-3 py-2 border rounded-lg mr-2 text-lg"
          />
        </div>
      </form>
    </div>
  );
};

export default TaskInput;
