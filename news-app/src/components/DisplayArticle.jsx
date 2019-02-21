import React from "react";

const DisplayArticle = props => {
  return (
    <div>
      <img src={props.gifData.images.original.url} />
    </div>
  );
};

export default DisplayArticle;
