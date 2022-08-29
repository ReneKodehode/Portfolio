import styled from "styled-components";
import { emailLogo, githubLogo, linkedInLogo } from "./ContactPageComponents";
import profileImage from "../../img/ProfileImage.png";

export const ContactContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const GitHubLogo = styled(githubLogo)`
  width: 50px;
`;

export const EmailLogo = styled(emailLogo)`
  width: 50px;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const LinkedInLogo = styled(linkedInLogo)`
  width: 50px;
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
  margin-top: 2rem;
  width: 100%;
  justify-content: center;
`;

export const ContactSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;
