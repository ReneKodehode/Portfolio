import {
  ProjectContentDiv,
  ProjectStyledTitle,
} from "./projectPage/ProjectPageStyles";
import { ProjectComponent } from "./projectPage/ProjectPageComponents";

export default function ProjectsPage() {
  return (
    <ProjectContentDiv>
      <ProjectStyledTitle>Projects</ProjectStyledTitle>

      {/* My-Shop */}
      <ProjectComponent
        title="Web shop"
        gitLink="https://github.com/ReneKodehode/my-shop"
        ghLink="https://renekodehode.github.io/my-shop/"
        description="My take on a scalable web shop."
        mainTag="Javascript"
        secondaryTag="React, React router, styled components"
      />

      {/* portfolio */}

      <ProjectComponent
        title="Portfolio"
        gitLink="https://github.com/ReneKodehode/Portfolio"
        ghLink=""
        description="This website that you are watching at this moment"
        mainTag="Javascript"
        secondaryTag="React, React router, styled components"
      />

      {/* Calculator */}
      <ProjectComponent
        title="Calculator"
        gitLink="https://github.com/ReneKodehode/kodehode/tree/master/paskenott/Calculator-app/calculator-app"
        ghLink=""
        description="A calculator app with different themes. My first react project."
        mainTag="Javascript"
        secondaryTag="React, styled components"
      />

      {/* Todo-App */}
      <ProjectComponent
        title="Todo-App"
        gitLink="https://github.com/ReneKodehode/kodehode/tree/master/Projects/Todo-app"
        ghLink=""
        description="A todo app with some styling and sorting."
        mainTag="javascript"
        secondaryTag="Html, css, javascript"
      />

      {/* Multiple-App */}
      <ProjectComponent
        title="Multiple-App"
        gitLink="https://github.com/ReneKodehode/kodehode/tree/master/lvl4/React-Router-Dom/react-router-dom"
        ghLink=""
        description="Learning react router, styled components, and better file
        structures."
        mainTag="javascript"
        secondaryTag="Html, css, javascript"
      />
    </ProjectContentDiv>
  );
}

{
  /* <ProjectComponent
  title=""
  gitLink=""
  ghLink=""
  description=""
  mainTag=""
  secondaryTag=""
/> */
}
