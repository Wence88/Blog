import React from "react";
import "./featured.css";
import { FaBookmark } from "react-icons/fa6";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredLeft">
        <h2>
          Featured <span>SEE MORE</span>
        </h2>

        <div className="featuredLeftTopImgCon">
          <img src="./img/img1.jpeg" alt="" />

          <div className="bookmarkIcon">
            <FaBookmark color="white" size={12} />
          </div>

          <div className="featuredLeftTopText">
            <h4>Featured {"<>"} Africa</h4>
            <h3>10 African countries with the highest life expectancy</h3>
            <p>October 18, 2023.</p>
          </div>
        </div>

        <div className="featuedLeftBottomCon">
          <div className="featuedLeftBottomItem">
            <img src="./img/img2.jpg" alt="" />

            <div className="bookmarkIcon">
              <FaBookmark color="white" size={12} />
            </div>

            <div className="featuredLeftBottomText">
              <h4>Crypto</h4>
              <h3>What can you do with Bitcoin in 2023</h3>
              <p>October 18, 2023.</p>
            </div>
          </div>

          <div className="featuedLeftBottomItem">
            <img src="./img/img5.jpg" alt="" />

            <div className="bookmarkIcon">
              <FaBookmark color="white" size={12} />
            </div>

            <div className="featuredLeftBottomText">
              <h4>Crypto</h4>
              <h3>What can you do with Bitcoin in 2023</h3>
              <p>October 18, 2023.</p>
            </div>
          </div>

          <div className="featuedLeftBottomItem">
            <img src="./img/img6.jpg" alt="" />

            <div className="bookmarkIcon">
              <FaBookmark color="white" size={12} />
            </div>

            <div className="featuredLeftBottomText">
              <h4>Crypto</h4>
              <h3>What can you do with Bitcoin in 2023</h3>
              <p>October 18, 2023.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="featuredRight">
        <div className="featuedRightTopCon">
          <div className="featuedRightTopItem">
            <img src="./img/img3.jpeg" alt="" />

            <div className="bookmarkIcon">
              <FaBookmark color="white" size={12} />
            </div>

            <div className="featuredRightTop"></div>
            <h4>In the News</h4>
            <h3>Top 5 best paid jobs in Africa 2023</h3>
            <p>October 18, 2023.</p>
          </div>

          <div className="featuedRightTopItem">
            <img src="./img/img4.webp" alt="" />

            <div className="bookmarkIcon">
              <FaBookmark color="white" size={12} />
            </div>

            <div className="featuredLeftTop"></div>
            <h4>In the News</h4>
            <h3>Top 5 best paid jobs in Africa 2023</h3>
            <p>October 18, 2023.</p>
          </div>
        </div>

        <div className="featuredRightBottomCon">
          <div className="featuredRightBottomItem">
            <div className="left">
              <img src="/img/img1.jpeg" alt="" />
            </div>

            <div className="right">
              <h3>How bitcoin can help a business attract new employees</h3>

              <p>October 13, 2023</p>
            </div>
          </div>

          <div className="featuredRightBottomItem">
            <div className="left">
              <img src="/img/img1.jpeg" alt="" />
            </div>

            <div className="right">
              <h3>How bitcoin can help a business attract new employees</h3>

              <p>October 13, 2023</p>
            </div>
          </div>

          <div className="featuredRightBottomItem">
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

export default Featured;
