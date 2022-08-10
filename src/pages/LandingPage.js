import {
  HeroImage,
  LandingPageContentDiv,
  StyledLandingRingDiv,
  StyledName,
  WorkPitchText,
} from "./landingPage/LandingPageStyles";

export default function LandingPage() {
  return (
    <LandingPageContentDiv>
      <HeroImage alt={"heroimage"}>
        <StyledName>Rene Folkestad Wichstrøm</StyledName>
      </HeroImage>
      <StyledLandingRingDiv alt={"profile image"} />
      <WorkPitchText>
        Jeg holder på med frontend utvikler kurs hos Kodehode og søker jobb som
        utvikler. Interessen min for programmering startet gjennom modding av
        pc-spill <br />
        Denne interessen har økt og endret seg til å skape og bygge systemer og
        løsninger. På fritiden liker jeg å game med venner og se på serie.
      </WorkPitchText>
    </LandingPageContentDiv>
  );
}
