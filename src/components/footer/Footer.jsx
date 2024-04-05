import React from "react";
import "./footer.css";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerItems">
        <h2>About</h2>

        <div className="horiz">
          <div className="hoziz_child"></div>
        </div>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          dolorum similique molestias corrupti placeat illum culpa blanditiis et
          provident eos perspiciatis ratione officia dignissimos, error
          accusamus quo doloribus dolor quisquam?
        </p>

        <div className="footerIcons">
          <CiFacebook />
          <FaXTwitter />
          <CiInstagram />
        </div>
      </div>

      <div className="footerItems">
        <h2>What do you think of CFD trading?</h2>
        <p>October 18, 2023.</p>
      </div>

      <div className="footerItems">
        <h2>Recent Articles</h2>

        <div className="horiz">
          <div className="hoziz_child"></div>
        </div>
        <h2>What do you think of CFD trading?</h2>
        <p>October 18, 2023.</p>

        <h2>What do you think of CFD trading?</h2>
        <p>October 18, 2023.</p>

        <h2>What do you think of CFD trading?</h2>
        <p>October 18, 2023.</p>
      </div>

      <div className="footerItems">
        <h2>In the News</h2>

        <div className="horiz">
          <div className="hoziz_child"></div>
        </div>

        <h2>
          What do you think of CFD trading? Give your opinion in the comments
          below!😉
        </h2>
        <p>October 18, 2023.</p>

        <h2>
          What do you think of CFD trading? Give your opinion in the comments
          below!😉
        </h2>
        <p>October 18, 2023.</p>

        <h2>
          What do you think of CFD trading? Give your opinion in the comments
          below!😉
        </h2>
        <p>October 18, 2023.</p>
      </div>
    </div>
  );
};

export default Footer;
