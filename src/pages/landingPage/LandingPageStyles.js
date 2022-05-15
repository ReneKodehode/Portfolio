import styled from "styled-components";
import image from "../../img/HeroImage.jpg";

export const LandingPageContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 100vw;
`;

export const StyledRingDiv = styled.div`
  width: 100px;
  height: 100px;
  border-left: 4px solid black;
  border-right: 4px solid black;
  border-radius: 50%;
  position: relative;
`;

export const StyledLine = styled.hr``;

export const StyledName = styled.h1`
  position: absolute;
  text-align: right;
  bottom: 0;
  right: 0;
  font-size: 2rem;
`;

export const HeroImage = styled.div`
  z-index: -1;
  position: relative;
  background-position: center;
  background-attachment: fixed;
  height: 300px;
  background: url(${image});
  background-size: cover;
  background-position: top bottom;
  background-repeat: no-repeat;
  border-bottom: 2px solid black;
`;
