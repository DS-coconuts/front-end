import React, { useState, useEffect } from "react";
import styled from "styled-components";
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
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled.p`
  margin: 0 10px;
  color: #132043;
  font-size: 16px;
  font-family: "NanumSquareNeo";
`;

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userData, setUserData] = useState({
    loginId: "",
    image: userIcon,
  });

  // api 연동 후 삭제
  const mockUserData = {
    loginId: "abc",
    password: "1234",
    image: userIcon,
  };

  useEffect(() => {
    // 예시 API 주소 및 로그인 확인
    const checkLoginStatus = async () => {
      try {
        const response = await fetch("/api/users/login", {
          method: "GET",
        });

        const data = await response.json();

        if (data.status === 200 && data.code === "SUCCESS_LOGIN") {
          setIsLoggedIn(true);
          // 응답에서 loginId와 image를 추출하여 상태를 업데이트합니다.
          setUserData({
            loginId: data.data.loginId,
            image: data.data.image,
          });
        }
      } catch (error) {
        console.error("로그인 상태 확인 중 오류 발생:", error);
      }
    };

    checkLoginStatus();
  }, []); // useEffect를 한 번만 호출하도록 빈 배열을 전달합니다.

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/users/logout", {
        method: "GET",
      });

      const data = await response.json();

      if (data.status === 200 && data.code === "SUCCESS_LOGOUT") {
        // 사용자가 로그아웃되었음을 반영하도록 상태를 업데이트합니다.
        setIsLoggedIn(false);
        alert("로그아웃 되었습니다.");
        window.location.href = `/`;
      } else {
        // 에러 케이스를 처리하세요
        console.error("로그아웃 실패:", data.message);
      }
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
      // }
    }
  };

  return (
    <NavContainer>
      <NavItems>
        <TextLink to="/">
          <img
            src={logo_pink}
            alt={"Logo"}
            style={{
              width: "auto",
              height: "50px",
              marginTop: "5px",
              marginRight: "10px",
            }}
          />
        </TextLink>
        <TextLink to="/">
          <NavItem>Typing</NavItem>
        </TextLink>
        <TextLink to="/ranking">
          <NavItem>Ranking</NavItem>
        </TextLink>
      </NavItems>
      <NavItems>
        {isLoggedIn === true ? (
          <>
            <img
              src={userData.image}
              alt={"userIcon"}
              style={{ width: "auto", height: "25px", marginTop: "5px" }}
            />
            <TextLink to="/my">
              <NavItem>{userData.loginId}</NavItem>
            </TextLink>
            <TextLink to="/">
              <NavItem onClick={handleLogout}>로그아웃</NavItem>
            </TextLink>
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
