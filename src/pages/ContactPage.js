import {
  ContactContentDiv,
  ContactSectionDiv,
  ContactStyledText,
  ContactStyledTitle,
  EmailLogo,
  GitHubLogo,
  LinkedInLogo,
  StyledContactMainDiv,
  StyledContactRingDiv,
} from "./contactPage/ContactPageStyles";

export default function ContactPage() {
  return (
    <ContactContentDiv>
      <StyledContactRingDiv></StyledContactRingDiv>

      <StyledContactMainDiv>
        <ContactSectionDiv>
          <ContactStyledTitle>About me</ContactStyledTitle>
          <ContactStyledText>Rene Folkestad Wichstrøm</ContactStyledText>
          <ContactStyledText>Bergen, Norway</ContactStyledText>
          <ContactStyledText>23. februar 1994</ContactStyledText>
        </ContactSectionDiv>
        <ContactSectionDiv>
          <ContactStyledTitle>Contact</ContactStyledTitle>
          <ContactStyledText>rfolkestad@hotmail.com</ContactStyledText>
          <ContactStyledText>https://github.com/ReneKodehode</ContactStyledText>
          <StyledContactMainDiv>
            <LinkedInLogo href="https://www.linkedin.com/in/rene-folkestad-wichstr%C3%B8m-4661ab249/"></LinkedInLogo>
            <EmailLogo href={"mailto:rfolkestad@hotmail.com"}></EmailLogo>
            <GitHubLogo href="https://github.com/ReneKodehode"></GitHubLogo>
          </StyledContactMainDiv>
        </ContactSectionDiv>
      </StyledContactMainDiv>
    </ContactContentDiv>
  );
}
