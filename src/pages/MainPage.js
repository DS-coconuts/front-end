import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import logo_C from "../assets/icons/logo_C.png";
import logo_HTML from "../assets/icons/logo_HTML.png";
import logo_python from "../assets/icons/logo_python.png";
import logo_Java from "../assets/icons/logo_JAVA.png";
import logo_JavaScript from "../assets/icons/logo_JavaScript.png";

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #132043;
  height: 100%;
  width: 100%;
  padding: 100px;
`;

const TitleText = styled.p`
  font-size: 50px;
  color: #f1b4bb;
  font-family: "bitbit";
  margin: 0px;
`;

const SubTitleText = styled.p`
  font-size: 18px;
  color: #fff;
  font-family: "NanumSquareNeo";
  margin: 0px 0px 30px 0px;
`;

const LoginTextLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  color: #f1b4bb;
  font-family: "bitbit";
  margin-top: 100px;
`;

const LanButton = styled.button`
  padding: 10px 10px;
  margin: 15px;
  width: 180px;
  height: 70px;
  border: none;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  &:hover {
    background-color: #f1b4bb;
    transition: 0.5s;
  }
`;

const LanButtons = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainPage = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <PageContainer>
      <TitleText>Typing Practice for Programmers</TitleText>
      <SubTitleText>연습하고 싶은 언어를 선택하세요.</SubTitleText>

      <LanButtons>
        <Link to="/typing/Python">
          <LanButton>
            <img
              src={logo_python}
              alt={"logo_python"}
              style={{ width: "auto", height: "40px", marginTop: "5px" }}
            />
          </LanButton>
        </Link>
        <Link to="/typing/Java">
          <LanButton>
            <img
              src={logo_Java}
              alt={"logo_Java"}
              style={{ width: "auto", height: "45px", marginTop: "-2px" }}
            />
          </LanButton>
        </Link>
        <Link to="/typing/C">
          <LanButton>
            <img
              src={logo_C}
              alt={"logo_C"}
              style={{ width: "auto", height: "45px", marginTop: "-2px" }}
            />
          </LanButton>
        </Link>
      </LanButtons>
      <LanButtons>
        <Link to="/typing/HTML">
          <LanButton>
            <img
              src={logo_HTML}
              alt={"logo_HTML"}
              style={{ width: "auto", height: "45px", marginTop: "-2px" }}
            />
          </LanButton>
        </Link>
        <Link to="/typing/JavaScript">
          <LanButton>
            <img
              src={logo_JavaScript}
              alt={"logo_JavaScript"}
              style={{ width: "auto", height: "45px", marginTop: "-2px" }}
            />
          </LanButton>
        </Link>
      </LanButtons>
      {isLoggedIn ? null : (
        <LoginTextLink to="/login">로그인하러 가기 →</LoginTextLink>
      )}
    </PageContainer>
  );
};

export default MainPage;
