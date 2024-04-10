import React from "react";
import "./africa.css";

const Africa = ({news}) => {
  // console.log(news)
  return (
    <div className="africa">
      <div className="featuredLeft">
        <h2>
          Africa <span>SEE MORE</span>
        </h2>
      </div>

      <div className="africaBottomCon">
        <div className="africaBottomItem">
          <div className="africaBottomItemText">
            <h3>10 African countries with the highest life expectancy</h3>
            <p>October 18, 2023.</p>
          </div>
        </div>

        <div className="africaBottomItem">
          <img src="/img/img5.jpg" alt="" />
          <div className="africaBottomItemText">
            <h3>10 African countries with the highest life expectancy</h3>
            <p>October 18, 2023.</p>
          </div>
        </div>

        <div className="africaBottomItem">
          <div className="third">
            <div className="left">
              <img src="/img/img1.jpeg" alt="" />
            </div>

            <div className="right">
              <h3>How bitcoin can help a business attract new employees</h3>
              <p>October 13, 2023</p>
            </div>
          </div>

          <div className="third">
            <div className="left">
              <img src="/img/img1.jpeg" alt="" />
            </div>
            <div className="right">
              <h3>How bitcoin can help a business attract new employees</h3>
              <p>October 13, 2023</p>
            </div>
          </div>

          <div className="third">
            <div className="left">
              <img src="/img/img1.jpeg" alt="" />
            </div>
            <div className="right">
              <h3>How bitcoin can help a business attract new employees</h3>
              <p>October 13, 2023</p>
            </div>
          </div>

          <div className="third">
            <div className="left">
              <img src="/img/img1.jpeg" alt="" />
            </div>
            <div className="right">
              <h3>How bitcoin can help a business attract new employees</h3>
              <p>October 13, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Africa;
