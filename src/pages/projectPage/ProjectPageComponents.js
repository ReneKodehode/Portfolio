import React from "react";

export const styledA = ({ source, text }) => {
  return (
    <a href={source} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
};
