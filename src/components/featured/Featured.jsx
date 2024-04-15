import React from "react";
import "./featured.css";
import { FaBookmark } from "react-icons/fa6";
import moment from "moment";

const Featured = ({ news }) => {

  return (
    <div className="featured">
      <div className="featuredLeft">
        <h2>
          Featured <span>SEE MORE</span>
        </h2>

        {news?.slice(0, 1)?.map((item, index) => (
          <div className="featuredLeftTopImgCon" key={index}>
            <img src={item.urlToImage} alt="" />

            <div className="bookmarkIcon">
              <FaBookmark color="white" size={12} />
            </div>

            <div className="featuredLeftTopText">
              <h4>Featured {"<>"} Africa</h4>
              <h3>{item?.title}</h3>
              <p>{moment(item.publishedAt).format("MMMM Do, YYYY")}</p>
            </div>
          </div>
        ))}

        <div className="featuedLeftBottomCon">
          {news?.slice(1, 4)?.map((item, index) => (
            <div className="featuedLeftBottomItem" key={index}>
              <img src={item.urlToImage} alt="" />

              <div className="bookmarkIcon">
                <FaBookmark color="white" size={12} />
              </div>

              <div className="featuredLeftBottomText">
                <h4>Crypto</h4>
                <h3>{item?.title}</h3>
                <p>{moment(item.publishedAt).format("MMMM Do, YYYY")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="featuredRight">
        <div className="featuedRightTopCon">
          {news?.slice(4, 6)?.map((item, index) => (
            <div className="featuedRightTopItem" key={index}>
              <img src={item.urlToImage} alt="" />

              <div className="bookmarkIcon">
                <FaBookmark color="white" size={12} />
              </div>

              <div className="featuredRightTop"></div>
              <h4>In the News</h4>
              <h3>{item?.title?.slice(0, 30)}</h3>
              <p>{moment(item.publishedAt).format("MMMM Do, YYYY")}</p>
            </div>
          ))}
        </div>

        <div className="featuredRightBottomCon">
          {news?.slice(6, 9)?.map((item, index) => (
            <div className="featuredRightBottomItem" key={index}>
              <div className="left">
                <img src={item.urlToImage} alt="" />
              </div>

              <div className="right">
                <h3>{item?.title}</h3>

                <p>{moment(item.publishedAt).format("MMMM Do, YYYY")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
