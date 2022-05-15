import styled from "styled-components";
import {
  workImage,
  referenceImage,
  universityImage,
} from "./ResumePageComponents";

export const WorkImage = styled(workImage)``;

export const ReferenceImage = styled(referenceImage)``;

export const UniversityImage = styled(universityImage)``;

export const ResumeContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResumeSectionDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
`;

export const ResumeStyledTitle = styled.h1`
  text-align: center;
`;

export const ResumeStyledUnderTitle = styled.h2``;

export const ResumeStyledText = styled.p`
  text-align: center;
`;
