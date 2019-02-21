import React from "react";

const DisplayArticle = props => {
  return (
    <div className="article">
      <h1>{props.articleData.title}</h1>
      <h2>By:{props.articleData.author}</h2>
      <p>
        {props.articleData.description}{" "}
        <a href={props.articleData.url}>{props.articleData.source.name}</a>
      </p>
      <img className="article-image" src={props.articleData.urlToImage} />
    </div>
  );
};

export default DisplayArticle;
