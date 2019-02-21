import React from "react";
import DisplayArticle from "./DisplayArticle";

const ArticleList = props => {
  const { articleData } = props;
  return (
    <div className="article-list">
      {articleData.map((el, index) => (
        <DisplayArticle key={index} articleData={el} />
      ))}
    </div>
  );
};
export default ArticleList;
