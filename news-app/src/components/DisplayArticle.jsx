import React from "react";

const DisplayArticle = props => {
  const date = new Date(props.articleData.publishedAt);
  return (
    <div className="article">
      <div className="body-article">
        <img className="article-image" src={props.articleData.urlToImage} />
        <div className="article-text">
          <div>
            <h1 id="title">{props.articleData.title.toUpperCase()}</h1>

            <h2 id="author">
              By:{" "}
              <a
                href={`https://www.google.com/search?q=${
                  props.articleData.author
                }`}
              >
                {props.articleData.author}
              </a>
            </h2>
            <h2>Date:{date.toDateString()}</h2>
          </div>
          <p>
            {props.articleData.description}{" "}
            <a href={props.articleData.url}>{props.articleData.source.name}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayArticle;
