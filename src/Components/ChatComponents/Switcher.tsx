import "../../App.css";
import React from "react";

export const Switcher = () => {
  return (
    <div className="empty">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};
