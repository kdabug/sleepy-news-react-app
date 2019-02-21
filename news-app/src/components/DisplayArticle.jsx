import React from "react";

const DisplayArticle = props => {
  return (
    <div>
      <img src={props.gifData.images.original.url} alt="cat" />
    </div>
  );
};

export default DisplayArticle;
