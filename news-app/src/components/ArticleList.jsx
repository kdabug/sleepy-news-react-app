import React from "react";
import DisplayArticle from "./DisplayArticle";

const ArticleList = props => {
  return (
    <div className="article-list">
      <h1>This is the ArticleList Component</h1>
      {props.kittenData.map(gifData => (
        <DisplayArticle key={gifData.id} gifData={gifData} />
      ))}
    </div>
  );
};
export default ArticleList;
