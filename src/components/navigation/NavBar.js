import React from "react";
import { A } from "hookrouter";
import UserIcon from "../../style/icon.jpg";
import logo from "../../style/logo.png";

export default function NavBar() {
  return (
    <div className="navigation-wrapper">
      <div className="logo">
        <A href="/">
          <img className="logo" src={logo} alt="Logo" />
        </A>
      </div>
      <div className="nav-links">
        <div className="search">
          <input placeholder="Find your book here."></input>
        </div>
        <div className="nav-link-h">
          <A href="/">
            <button className="button" type="button">
              Home
            </button>
          </A>
        </div>
        <div className="nav-link-b">
          <A href="/books">
            <button className="button" type="button">
              Books
            </button>
          </A>
        </div>
        <div className="nav-link-p">
          <A href="/profile">
            <button className="button" type="button">
              Profile
            </button>

            <img className="UserIcon" src={UserIcon} alt="User-Icon" />
          </A>
        </div>
      </div>
    </div>
  );
}
