import React from "react";
import news from "../img/news.jpeg";
import { Link } from "react-router-dom";

const Card = ({ title, link, img, desc, date, buttonText ,all_news}) => {
  return (
    <div>
      <Link
            // className="btn btn-primary article-btn"
            to={{
              pathname: "/sum",
              state: { title, link, img, desc, date, buttonText, all_news},
            }}
          >
      <div className="card">
        <img
          src={!img? news:img }
          className="card-img-top card-img"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title title">{title}</h5>
         
          {/* <Link
            // className="btn btn-primary article-btn"
            to={{
              pathname: "/sum",
              state: { title, link, img, desc, date, buttonText },
            }}
          > */}
            {/* {buttonText} */}
          {/* </Link> */}
          <p className="source">Published: {date}</p>
      

        </div>
      </div>
      </Link>

    </div>
  );
};

export default Card;
