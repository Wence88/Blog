import React from "react";
import "./culture.css";

const Culture = ({news}) => {
  // console.log(news)
  return (
    <div className="culture">
      <div className="featuredLeft">
        <h2>
          Culture <span>SEE MORE</span>
        </h2>
      </div>

      <div className="cultureTopCon">
        <div className="cultureTopLeft">
          <div className="cultureTopLeftImgs">
            <img src="/img/img1.jpeg" alt="" />
            <img src="/img/img2.jpg" alt="" />
          </div>

          <div className="cultureTopLeftTextCon">
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              laborum explicabo blanditiis.
            </h2>

            <p>October 17, 2023</p>

            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae totam repellat nam nostrum consequuntur eius quibusdam
              fugiat pariatur debitis explicabo assumenda temporibus facilis
              dolore exercitationem ex incidunt, suscipit aliquam molestiae?
            </h3>
          </div>
        </div>

        <div className="cultureTopRight">
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

      <div className="cultureBottomCon">
        <div className="cultureBottomItem">
          <div className="cultureBottomItemText">
            <h3>10 African countries with the highest life expectancy</h3>
            <p>October 18, 2023.</p>
          </div>
        </div>

        <div className="cultureBottomItem">
          <div className="cultureBottomItemText">
            <h3>10 African countries with the highest life expectancy</h3>
            <p>October 18, 2023.</p>
          </div>
        </div>

        <div className="cultureBottomItem">
          <div className="cultureBottomItemText">
            <h3>10 African countries with the highest life expectancy</h3>
            <p>October 18, 2023.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
