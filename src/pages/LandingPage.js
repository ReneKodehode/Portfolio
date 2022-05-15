import {
  HeroImage,
  LandingPageContentDiv,
  StyledLine,
  StyledName,
  StyledRingDiv,
} from "./landingPage/LandingPageStyles";

export default function LandingPage() {
  return (
    <LandingPageContentDiv>
      <HeroImage>
        <StyledName>Rene Folkestad Wichstrøm</StyledName>
        <StyledRingDiv></StyledRingDiv>
      </HeroImage>

      <StyledLine></StyledLine>
    </LandingPageContentDiv>
  );
}
