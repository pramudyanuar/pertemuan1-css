import React from "react";
import "../index.css";

const Header = ({ text, count, deleteStatus }) => {
  return (
    <div className="header">
      {text}
      <div className="header-count">{count}</div>
      <button className="header-delete-button" onClick={() => deleteStatus(text)}>🗑️</button>
    </div>
  );
};

export default Header;
