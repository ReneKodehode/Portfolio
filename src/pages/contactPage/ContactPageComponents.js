import React from "react";
import gitLogo from "./../../img/GitHub.svg";
import emailSVGlogo from "../../img/Email.svg";
import LinkedSvgIn from "../../img/LinkedIn.svg";

export const projectImage = ({ source }) => {
  return <img src={source}></img>;
};

export const githubLogo = ({ className, href }) => {
  return (
    <>
      <a href={href} target="_blank">
        <img className={className} src={gitLogo}></img>
      </a>
    </>
  );
};

export const linkedInLogo = ({ className, href }) => {
  return (
    <>
      <a href={href} target="_blank">
        <img className={className} src={LinkedSvgIn}></img>
      </a>
    </>
  );
};

export const emailLogo = ({ className, href }) => {
  return (
    <>
      <a href={href} target="_blank">
        <img className={className} src={emailSVGlogo}></img>
      </a>
    </>
  );
};
