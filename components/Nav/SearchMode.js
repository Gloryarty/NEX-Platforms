import React from "react";

export default function SearchMode({ setSearchMode }) {
  return (
    <div
      onClick={() => setSearchMode(true)}
      className="nav-btn mode-btn search-btn"
    >
      <i className="ri-search-2-line"></i>
    </div>
  );
}
