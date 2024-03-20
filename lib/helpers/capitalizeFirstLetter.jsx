import React from "react";

const capitalizeFirstLetter = (string, number) => {
  if (number === 1) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  } else if (number === 2) {
    return (
      string.charAt(0).toUpperCase() +
      string.charAt(1).toUpperCase() +
      string.slice(2).toLowerCase()
    );
  }
  return string;
};

export default capitalizeFirstLetter;
