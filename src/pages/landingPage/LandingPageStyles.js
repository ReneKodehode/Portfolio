import styled from "styled-components";
import image from "../../img/HeroImage.jpg";
import profileImage from "../../img/ProfileImage.png";

export const LandingPageContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const StyledLandingRingDiv = styled.div`
  width: 192px;
  height: 200px;
  border-left: 4px solid black;
  border-right: 4px solid black;
  border-radius: 50%;
  position: absolute;
  top: 200px;
  margin-left: 1rem;
  background: url(${profileImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledName = styled.h1`
  position: absolute;
  text-align: right;
  bottom: 0;
  right: 0;
  font-size: 2rem;
  margin-right: 0.5rem;
  text-shadow: 0px 0px 3px rgba(255, 255, 255, 0.75);
`;

export const HeroImage = styled.div`
  z-index: -1;
  position: relative;
  height: 300px;
  background: url(${image});
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-position: top bottom;
  background-repeat: no-repeat;
  border-bottom: 2px solid black;
`;

export const WorkPitchText = styled.p`
  text-align: left;
  margin-left: auto;
  margin-top: 1rem;
  margin-right: 1rem;
  font-size: 1.2rem;
  width: 50%;
`;
