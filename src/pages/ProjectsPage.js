import {
  ProjectContentDiv,
  ProjectDescriptionText,
  ProjectSectionDiv,
  ProjectStyledLink,
  ProjectStyledTitle,
  ProjectStyledUnderTitle,
  ProjectTagDiv,
  ProjectTagText,
  ProjectTextDiv,
} from "./projectPage/ProjectPageStyles";

export default function ProjectsPage() {
  return (
    <ProjectContentDiv>
      <ProjectStyledTitle>Projects</ProjectStyledTitle>

      <ProjectSectionDiv>
        <ProjectTextDiv>
          <ProjectStyledUnderTitle>Portfolio</ProjectStyledUnderTitle>
          <ProjectStyledLink>Link here</ProjectStyledLink>
          <ProjectDescriptionText>
            This is some description of the project that is supposed to be here
            and it can be very long
          </ProjectDescriptionText>
        </ProjectTextDiv>
        <ProjectTagDiv>
          <ProjectTagText>HTML,CSS,JS</ProjectTagText>
          <ProjectTagText>React, Router, styled components</ProjectTagText>
        </ProjectTagDiv>
      </ProjectSectionDiv>
    </ProjectContentDiv>
  );
}
