"use client";
import React, { useEffect, useState } from "react";

const themeToggle = () => {
  useEffect(() => {
    if (localStorage.theme) {
      setTheme(localStorage.theme)
    }
  }, []);

  const toggleTheme = () => {
    if (localStorage.theme) {
      localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("light");

      document.documentElement.classList.add(localStorage.theme);
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }

    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  };

  const [theme, setTheme] = useState("light");

  return (
    <div className="relative px-1 cursor-target">
      <div className="day-night-mode">
        <div className="bg-gray-100 dark:bg-zinc-800 shadow-[1px_5px_15px_5px_rgba(255,255,255,0.3)] dark:shadow-[1px_5px_15px_5px_rgba(255,255,255,0.1)] border-2 border-zinc-300 dark:border-zinc-600 rounded-xl inline-block">
          <a
            className=" hover:shadow-[1px_5px_15px_5px_rgba(20,20,20,0.25)] rounded-xl block"
            href="#"
            onClick={toggleTheme}
          >
            <span
              className={` fa ${
                theme === "dark" ? "fa-sun" : "fa-moon" 
              }  text-zinc-800 dark:text-amber-50 text-xl flex items-center justify-center p-3`}
            ></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default themeToggle;
