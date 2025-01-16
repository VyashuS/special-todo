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
    intro:
      "A passionate developer with a love for coding and solving problems. Always eager to learn new technologies and improve skills.",
  };

  return (
    <div
      className={`todo-page min-h-screen p-6 lg:p-10 flex flex-col lg:flex-row ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="flex flex-col items-center justify-start w-full lg:w-1/4 p-6 lg:p-10 mb-6 lg:mb-0">
        <img
          src={userProfile.imageUrl}
          alt="Profile"
          className="w-32 h-32 lg:w-40 lg:h-40 rounded-full mb-4"
        />
        <span className="text-2xl lg:text-3xl font-bold">
          {userProfile.name}
        </span>
        <p className="text-lg lg:text-xl text-center mt-4">
          {userProfile.intro}
        </p>
      </div>
      <div className="flex flex-col items-center w-full lg:w-3/4 lg:ml-10">
        <div className="w-full flex justify-end mb-6">
          <button
            className={`p-3 lg:p-4 rounded ${
              darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-black"
            }`}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-10 animate-bounce text-center"
          style={{
            animation: "bounce 2s infinite",
          }}
        >
          Handle your Daily Tasks using this To-Do List..
        </h1>
        <div
          className={`bg-white shadow-md rounded-lg p-6 lg:p-8 mb-6 w-full ${
            darkMode && "bg-gray-700 text-white"
          }`}
        >
          <TaskInput />
        </div>
        <div
          className={`bg-white shadow-md rounded-lg p-6 lg:p-8 mb-6 w-full ${
            darkMode && "bg-gray-700 text-black"
          }`}
        >
          <TaskList />
        </div>
        <div
          className={`bg-white shadow-md rounded-lg p-6 lg:p-8 w-full ${
            darkMode && "bg-gray-700 text-black"
          }`}
        >
          <WeatherInfo />
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
