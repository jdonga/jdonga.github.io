import React from "react";
import Avatar from "../images/avatar.svg";

export const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <Avatar /> */}
      <img src={Avatar} className="avatar" />
      <span>James Duong</span>
    </nav>
  );
};
