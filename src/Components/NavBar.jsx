import { React, useState } from "react";
import "../Styles/NavBar.scss";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [state, setState] = useState(true);
  window.onscroll = () => {
    setState(window.pageYOffset === 0 ? true : false);
  };
  return (
    <div className={state ? "Nav one" : "Nav two"}>
      <div className="Container">
        <div className="left">
          <div className="imageContainer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
              alt="Netflix icon"
            ></img>
          </div>
          <div className="NavContainer">
            <nav className="Navigation">
              <Link to="/">
                <span>Home</span>
              </Link>
              <span>Series</span>
              <span>Movies</span>
              <span>New and Popular</span>
              <span>My list</span>
            </nav>
          </div>
        </div>
        <div className="right">
          <SearchSharpIcon className="icon-right"></SearchSharpIcon>
          <span>Kids</span>
          <NotificationsSharpIcon className="icon-right"></NotificationsSharpIcon>
          <img
            src="https://cdn.kibrispdr.org/data/download-wallpaper-hd-iphone-7.jpg"
            alt="Profile "
          ></img>
          <div className="ProfileContainer">
            <ArrowDropDownSharpIcon className="icon-right search"></ArrowDropDownSharpIcon>
            <div className="Menue">
              <span className="profile">Profile</span>
              <span className="logOut">Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
