import React from "react";
import Header from "./Header";
import ArticleList from "./ArticleList";

export default props => {
  const { usLiveArticleData } = props;
  return (
    <div>
      <Header lastQuery="top" />
      <div className="all-articles">
        <ArticleList articleData={usLiveArticleData} />
      </div>
    </div>
  );
};
