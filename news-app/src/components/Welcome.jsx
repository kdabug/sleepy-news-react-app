import React from "react";
import Header from "./Header";

import { withRouter } from "react-router-dom";

const Welcome = props => {
  return (
    <div className="welcome-container">
      <Header lastQuery="mikayda's" />
      <div className="cicada" />
      <h2>please select a category</h2>
      <div className="button-container">
        <button
          className="welcome-button"
          onClick={() => props.history.push("/top-news")}
        >
          top Us
        </button>
        <button
          className="welcome-button"
          onClick={() => props.history.push("/all-news")}
        >
          sleepy
        </button>
      </div>
    </div>
  );
};

export default withRouter(Welcome);
