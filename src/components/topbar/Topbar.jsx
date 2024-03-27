import React from "react";
import "./topbar.css";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarLogoSection">
        <div className="topbarLogo">
          <a href="/">
            <img src="./img/logo.png" alt="logo" />
          </a>
        </div>

        <div className="topbarIcons">
          <CiFacebook />
          <FaXTwitter />
          <CiInstagram />
        </div>
      </div>

      <div className="topbarMenuCon">
        <div className="topbarDate">Wednesday, October 18, 2023</div>

        <div className="topbarMenu">
          <ul>
            <li>Welcome</li>
            <li>Africa</li>
            <li>Sport</li>
            <li>Lifestyle</li>
            <li>Culture & Leisure</li>
            <li>Policy</li>
            <li>Company</li>
            <li>More</li>
          </ul>
        </div>

        <div className="topbarSearch">
          <span class="material-symbols-outlined">search</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
