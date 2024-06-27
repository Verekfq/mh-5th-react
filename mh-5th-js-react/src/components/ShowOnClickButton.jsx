import React, { useState } from "react";

const ShowOnClickButton = ({ buttonText, content }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <article>
      <button onClick={() => setShowContent((prev) => !prev)}>
        {buttonText}
      </button>
      <div>{content}</div>
    </article>
  );
};

export default ShowOnClickButton;
