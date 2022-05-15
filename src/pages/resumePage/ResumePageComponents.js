import React from "react";
import workSVG from "../../img/work.svg";
import referenceSVG from "../../img/Reference.svg";
import universitySVG from "../../img/University.svg";

export const workImage = ({ size }) => {
  return <img src={workSVG} alt="work briefcase" width={size}></img>;
};

export const referenceImage = ({ size }) => {
  return <img src={referenceSVG} alt="work briefcase" width={size}></img>;
};

export const universityImage = ({ size }) => {
  return <img src={universitySVG} alt="work briefcase" width={size}></img>;
};
