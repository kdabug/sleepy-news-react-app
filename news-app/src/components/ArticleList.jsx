import React from "react";
import DisplayArticle from "./DisplayArticle";

const ArticleList = props => {
  const { articleData } = props;
  return (
    <div className="article-list">
      <h1>This is the ArticleList Component</h1>
      {articleData.map((el, index) => (
        <DisplayArticle key={index} articleData={el} />
      ))}
    </div>
  );
};
export default ArticleList;
