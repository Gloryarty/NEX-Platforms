import React from "react";

export default function NavExpand({ expand, setExpand }) {
  return (
    <>
      {expand ? (
        <div onClick={() => setExpand(false)} className="nav-btn mode-btn">
          <i
            style={{ transform: `rotate(-90deg)` }}
            className="ri-menu-unfold-line"
          ></i>
        </div>
      ) : (
        <div onClick={() => setExpand(true)} className="nav-btn mode-btn">
          <i className="ri-menu-3-line"></i>
        </div>
      )}
    </>
  );
}
