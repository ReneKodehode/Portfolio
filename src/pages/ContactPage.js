import { ContactContentDiv, ContactSectionDiv, ContactStyledText, ContactStyledTitle, StyledContactMainDiv, StyledContactRingDiv } from "./contactPage/ContactPageStyles";


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
      </ContactSectionDiv>
      </StyledContactMainDiv>
    </ContactContentDiv>
  );
}
