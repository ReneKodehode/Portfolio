import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  left: 0;
  right: 0;

  position: absolute;
`;

export const NavLink = styled(Link)`
  color: black;
  margin-right: 1rem;
`;

export const Logo = styled(Link)`
  margin-right: auto;
  padding: 10px 13px;
  font-size: 1rem;
  text-decoration: none;
  border: 0.1rem solid black;
  text-align: center;
  border-radius: 50%;
`;
