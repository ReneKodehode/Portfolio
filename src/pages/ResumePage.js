import {
  ReferenceImage,
  ResumeContentDiv,
  ResumeSectionDiv,
  ResumeStyledText,
  ResumeStyledTitle,
  ResumeStyledUnderTitle,
  UniversityImage,
  WorkImage,
} from "./resumePage/ResumePageStyles";

export default function ResumePage() {
  return (
    <ResumeContentDiv>
      <ResumeStyledTitle>Resume</ResumeStyledTitle>

      <ResumeSectionDiv>
        <WorkImage size={"20px"}></WorkImage>
        <ResumeStyledUnderTitle>Work Experience</ResumeStyledUnderTitle>{" "}
      </ResumeSectionDiv>
      <ResumeStyledText>
        this is some work experience right here
      </ResumeStyledText>

      <ResumeSectionDiv>
        <UniversityImage size={"20px"}></UniversityImage>
        <ResumeStyledUnderTitle>Education</ResumeStyledUnderTitle>{" "}
      </ResumeSectionDiv>
      <ResumeStyledText>this is some education right here</ResumeStyledText>

      <ResumeSectionDiv>
        <ReferenceImage size={"20px"}></ReferenceImage>
        <ResumeStyledUnderTitle>Reference</ResumeStyledUnderTitle>{" "}
      </ResumeSectionDiv>
      <ResumeStyledText>this is some reference right here</ResumeStyledText>
    </ResumeContentDiv>
  );
}
