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
  margin-top: 56px;
`;

export const ResumeStyledChapter = styled.h2``;

export const ResumeStyledUnderTitle = styled.h3`
  text-align: center;
`;

export const ResumeStyledDescription = styled.p`
  text-align: center;
  width: 50vw;
`;
export const ResumeContentSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const ResumeStyledDate = styled.p`
  text-align: center;
`;