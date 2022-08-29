import React from "react";
import {
  ProjectDescriptionText,
  ProjectSectionDiv,
  ProjectStyledLink,
  ProjectStyledUnderTitle,
  ProjectTagDiv,
  ProjectTagText,
  ProjectTextDiv,
} from "./ProjectPageStyles";

export const styledA = ({ source, text }) => {
  return (
    <a href={source} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
};

export const ProjectComponent = ({
  title,
  gitLink,
  ghLink,
  description,
  mainTag,
  secondaryTag,
}) => {
  return (
    <ProjectSectionDiv>
      <ProjectTextDiv>
        <ProjectStyledUnderTitle>{title}</ProjectStyledUnderTitle>
        <ProjectStyledLink
          source={gitLink}
          text={"Github link"}
        ></ProjectStyledLink>
        <br></br>
        {ghLink === "" ? null : (
          <ProjectStyledLink
            source={ghLink}
            text={"Github pages"}
          ></ProjectStyledLink>
        )}
        <ProjectDescriptionText>{description}</ProjectDescriptionText>
      </ProjectTextDiv>
      <ProjectTagDiv>
        <ProjectTagText>{mainTag}</ProjectTagText>
        <ProjectTagText>{secondaryTag}</ProjectTagText>
      </ProjectTagDiv>
    </ProjectSectionDiv>
  );
};
