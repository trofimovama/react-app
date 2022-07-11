import React from "react";
import { Link } from "react-router-dom";
import { GiHeartBattery } from "react-icons/gi";
import "./Navbar.scss";

const Navbar:React.FC = () => {
  return (
    <div className="header">
      <Link to="/">
        <GiHeartBattery className="logo-icon" />
      </Link>
    </div>
  );
};

export default Navbar;
