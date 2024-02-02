import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

import logo_pink from "../assets/icons/logo_pink.png";
import userIcon from "../assets/icons/userIcon_green.png";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  background-color: #f1b4bb;
`;

const TextLink = styled(Link)`
  text-decoration: none;
`

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled.p`
  margin: 0 10px;
  color: #132043;
  font-size: 16px;
  font-family: 'NanumSquareNeo';
`;

const Navbar = () => {
  // 로그인 기능 구현 전 임시
  const isLoggedIn = true;

  return(
  <NavContainer>
    <NavItems>
      <TextLink to="/">
        <img src={logo_pink} alt={'Logo'} style={{ width: 'auto', height: '50px', marginTop: '5px', marginRight: '10px' }} />
      </TextLink>
      <TextLink to="/">
        <NavItem>Typing</NavItem>
      </TextLink>
      <TextLink to="/ranking">
        <NavItem>Ranking</NavItem>
      </TextLink>
    </NavItems>
  <NavItems>
    {isLoggedIn===true ? (
        <>
          <img src={userIcon} alt={'userIcon'} style={{ width: 'auto', height: '25px', marginTop: '5px'}} />
          <TextLink to="/my">
            <NavItem>abc</NavItem>
          </TextLink>
          <NavItem>Logout</NavItem>
        </>
      ) : (
        <TextLink to="/login">
          <NavItem>Login</NavItem>
        </TextLink>
      )}
    </NavItems>
  </NavContainer>    
  );
};

export default Navbar;