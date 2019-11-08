import React from "react";
import Header from "./Header";
import ArticleList from "./ArticleList";
import Form from "./Form";

export default props => {
  const {
    lastQuery,
    topicArticleData,
    formQuery,
    handleChange,
    handleSubmit
  } = props;
  return (
    <div>
      <Header lastQuery={lastQuery} />
      <div className="all-articles">
        <Form
          formQuery={formQuery}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <ArticleList articleData={topicArticleData} />
      </div>
    </div>
  );
};
