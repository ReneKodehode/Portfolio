import styled from "styled-components";
import {} from "./ContactPageComponents";
import profileImage from "../../img/ProfileImage.png";

export const ContactContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  
`;

export const ContactStyledTitle = styled.h1`
  text-align: center;
  white-space: nowrap;
  font-weight: bold;
`;

export const ContactStyledText = styled.p`
  text-align: center;
  white-space: nowrap;
`;

export const StyledContactRingDiv = styled.div`
margin-top: 56px;
margin-bottom: 2rem;
  width: 192px;
  height: 200px;
  border-left: 4px solid black;
  border-right: 4px solid black;
  border-radius: 50%;
  background: url(${profileImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledContactMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vw;
  justify-content: center;
`;

export const ContactSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;