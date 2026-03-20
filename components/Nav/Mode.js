import React, { useEffect, useState } from "react";

const modes = [
  {
    name: "default",
  },
  {
    name: "dark",
  },
];

export default function Mode() {
  const [mode, setMode] = useState("default");

  const setDefault = () => {
    setMode("default");
    localStorage.setItem("legion_main_theme", "default");
    document.documentElement.setAttribute("data-theme", "default");
  };

  useEffect(() => {
    let mode = localStorage.getItem("legion_main_theme");
    if (!mode) {
      setDefault();
    } else {
      let mExists = modes.find((item) => item.name === mode);
      if (!mExists) setDefault();
      else applyMode(mode);
    }
  }, []);

  const applyMode = (newMode) => {
    setMode(newMode);
    localStorage.setItem("legion_main_theme", newMode);
    document.documentElement.setAttribute("data-theme", newMode);
  };

  return (
    <>
      {mode === "dark" && (
        <div onClick={() => applyMode("default")} className="nav-btn mode-btn">
          <i className="ri-sun-line"></i>
        </div>
      )}
      {mode === "default" && (
        <div onClick={() => applyMode("dark")} className="nav-btn mode-btn">
          <i className="ri-sun-fill"></i>
        </div>
      )}
    </>
  );
}
