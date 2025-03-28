import React from "react";
import "./navBar.scss";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { RiHome2Fill } from "react-icons/ri";
import { CgSearch } from "react-icons/cg";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";

const NavBar = ({ logout, name }) => {
  const [open, setOpen] = useState(false);
  const { toggle, darkMode } = useContext(DarkModeContext);
  return (
    <>
      <div className="navBar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="appName">parentcare</span>
        </Link>
        <div className="search">
          <CgSearch />
          <input type="text" placeholder="Search" />
        </div>

        <div className="user" onClick={() => { setOpen(!open) }}>
          <img
            src={`https://ui-avatars.com/api/?name=${name === undefined ? name : name
              }&background=random`}
            alt="name avatar"
          />
        </div>
      </div>
      <div className={`dropdown__menu ${open ? 'active' : 'inactive'}`}>
        <h3>{name}</h3>
        <ul>
          <li className="dropdown__item">
            <Link to="/">
              <RiHome2Fill /> Home
            </Link>
          </li>
          <li className="dropdown__item" onClick={toggle}>
            {darkMode ? <FaMoon /> : <FaSun />} {darkMode ? 'DarkMode : on' : 'DarkMode : off'}
          </li>
          <li className="dropdown__item" onClick={logout}>
            <MdLogout /> Keluar
          </li>
        </ul>

      </div>

    </>
  );
};

export default NavBar;
