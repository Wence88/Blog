import React from "react";
import "./africa.css";
import moment from "moment";

const Africa = ({ news }) => {
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
          {news?.slice(1, 2)?.map((item, index) => (
            <div key={index}>
              <img src={item.urlToImage} alt="" />
              <div className="africaBottomItemText">
                <h3>{item?.title}</h3>
                <p>{moment(item.publishedAt).format("MMMM Do, YYYY")}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="africaBottomItem">
          {news?.slice(2)?.map((item, index) => (
            <div className="third" key={index}>
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

export default Africa;
