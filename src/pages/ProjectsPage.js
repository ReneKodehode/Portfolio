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
        {/* portfolio */}
      <ProjectSectionDiv>
        <ProjectTextDiv>
          <ProjectStyledUnderTitle>Portfolio</ProjectStyledUnderTitle>
          <ProjectStyledLink source={"https://github.com/ReneKodehode/Portfolio"} ></ProjectStyledLink>
          <ProjectDescriptionText>
            This website that you are watching at this moment
          </ProjectDescriptionText>
        </ProjectTextDiv>
        <ProjectTagDiv>
          <ProjectTagText>Javascript</ProjectTagText>
          <ProjectTagText>React, React router, styled components</ProjectTagText>
        </ProjectTagDiv>
      </ProjectSectionDiv>
       {/* Calculator */}
      <ProjectSectionDiv>
        <ProjectTextDiv>
          <ProjectStyledUnderTitle>Calculator</ProjectStyledUnderTitle>
          <ProjectStyledLink source={"https://github.com/ReneKodehode/kodehode/tree/master/paskenott/Calculator-app/calculator-app"} ></ProjectStyledLink>
          <ProjectDescriptionText>
            A calculator app with different themes. My first react project.
          </ProjectDescriptionText>
        </ProjectTextDiv>
        <ProjectTagDiv>
          <ProjectTagText>Javascript</ProjectTagText>
          <ProjectTagText>React, styled components</ProjectTagText>
        </ProjectTagDiv>
      </ProjectSectionDiv>
       {/* Todo-App */}
       <ProjectSectionDiv>
        <ProjectTextDiv>
          <ProjectStyledUnderTitle>Todo-App</ProjectStyledUnderTitle>
          <ProjectStyledLink source={"https://github.com/ReneKodehode/kodehode/tree/master/Projects/Todo-app"} ></ProjectStyledLink>
          <ProjectDescriptionText>
            A todo app with some styling and sorting.
          </ProjectDescriptionText>
        </ProjectTextDiv>
        <ProjectTagDiv>
          <ProjectTagText>Html, css, javascript</ProjectTagText>
          <ProjectTagText></ProjectTagText>
        </ProjectTagDiv>
      </ProjectSectionDiv>
    {/* Multiple-App */}
    <ProjectSectionDiv>
        <ProjectTextDiv>
          <ProjectStyledUnderTitle>Multiple-App</ProjectStyledUnderTitle>
          <ProjectStyledLink source={"https://github.com/ReneKodehode/kodehode/tree/master/lvl4/React-Router-Dom/react-router-dom"} ></ProjectStyledLink>
          <ProjectDescriptionText>
            Learning react router, styled components, and better file structures.
          </ProjectDescriptionText>
        </ProjectTextDiv>
        <ProjectTagDiv>
          <ProjectTagText>Html, css, javascript</ProjectTagText>
          <ProjectTagText></ProjectTagText>
        </ProjectTagDiv>
      </ProjectSectionDiv>

    </ProjectContentDiv>
  );
}
