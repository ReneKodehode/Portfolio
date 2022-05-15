import styled from "styled-components";
import {styledA} from "./ProjectPageComponents";

export const ProjectContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
`;

export const ProjectSectionDiv = styled.div`
  display: flex;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 2rem;
`;

export const ProjectTextDiv = styled.div`
  flex: 1;
`;

export const ProjectTagDiv = styled.div`
  flex: 1;
  align-self: flex-end;
`;

export const ProjectDescriptionText = styled.p`
  text-align: left;
  width: 30vw;
`;

export const ProjectTagText = styled.p`
  text-align: right;
`;

export const ProjectStyledTitle = styled.h1`
  text-align: center;
  margin-top: 56px;
`;

export const ProjectStyledLink = styled(styledA)`
  text-align: left;
  
`;

export const ProjectStyledUnderTitle = styled.h2`
  text-align: left;
`;
