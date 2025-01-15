import React, { useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import WeatherInfo from "../components/WeatherInfo";
import image from "../img/Yashu-img.jpeg";

const TodoPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const userProfile = {
    name: "Yashaswi Verma",
    imageUrl: image, // Using the imported image
  };

  return (
    <div
      className={`todo-page min-h-screen p-4 flex ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="flex flex-col items-center justify-start w-1/6 p-4">
        <img
          src={userProfile.imageUrl}
          alt="Profile"
          className="w-28 h-28 rounded-full mb-2"
        />
        <span className="text-lg font-bold">{userProfile.name}</span>
      </div>
      <div className="flex flex-col items-center w-3/4">
        <div className="w-full flex justify-end mb-4">
          <button
            className={`p-2 rounded ${
              darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-black"
            }`}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "🌙" : "☀️"} Toggle Dark Mode
          </button>
        </div>
        <h1
          className="text-4xl font-bold mb-10 animate-bounce"
          style={{
            animation: "bounce 2s infinite",
          }}
        >
          Handle your Daily Tasks using this To-Do List..
        </h1>
        <div
          className={`bg-white shadow-md rounded-lg p-4 mb-4 w-full max-w-3xl ${
            darkMode && "bg-gray-700 text-white"
          }`}
        >
          <TaskInput />
        </div>
        <div
          className={`bg-white shadow-md rounded-lg p-4 mb-4 w-full max-w-3xl ${
            darkMode && "bg-gray-700 text-white"
          }`}
        >
          <TaskList />
        </div>
        <div
          className={`bg-white shadow-md rounded-lg p-4 w-full max-w-3xl ${
            darkMode && "bg-gray-700 text-white"
          }`}
        >
          <WeatherInfo />
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
