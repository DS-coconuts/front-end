import React, { useState, useEffect } from "react";
import axios from "axios";
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

export default function Navbar() {
  // const { userId } = useParams();
  const storedUserId = localStorage.getItem("userId");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    loginId: "",
    image: userIcon,
  });

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedLoggedIn === "true") {
      const storedUserId = localStorage.getItem("userId");

      if (storedUserId) {
        fetchUserData(storedUserId); // loginId를 전달하여 fetchUserData 호출
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        console.log("로컬 스토리지에서 loginId를 찾을 수 없습니다.");
      }
    } else {
      setIsLoggedIn(false);
      console.log("사용자는 이미 로그아웃 상태입니다.");
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/users/detail?userId=${userId}`
      );

      const data = response.data;
      console.log(data);
      console.log(data);

      if (data.status === 200 && data.code === "SUCCESS_GET_PROFILE") {
        setUserData({
          loginId: data.data.loginId,
          image: data.data.image,
        });
      }
    } catch (error) {
      console.error("나브바 불러오기 오류 발생:", error);
    }
  };

  const handleLogout = async () => {
    try {
      //   // 로컬 스토리지에서 loginId 가져오기
      //   const storedLoginId = localStorage.getItem("loginId");

      //   const response = await fetch(
      //     `http://localhost:8080/api/users/logout/${storedLoginId}`,
      //     {
      //       method: "GET",
      //     }
      //   );

      // const data = await response.json();
      // if (data.status === 200 && data.code === "SUCCESS_LOGOUT") {
      //   // 로그아웃 성공 시 로컬 스토리지 정보 초기화
      localStorage.clear();
      setIsLoggedIn(false);
      alert("로그아웃 되었습니다.");
      window.location.href = `/`;

      // } else {
      //   // 에러 케이스를 처리하세요
      //   console.error("로그아웃 실패:", data.message);
      // }
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
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
            <TextLink to="/my">
              <img
                src={userData.image || userIcon}
                alt={"userIcon"}
                style={{ width: "auto", height: "30px", marginTop: "5px" }}
              />
            </TextLink>
            <TextLink to="/my">
              <NavItem>{localStorage.getItem("loginId")}</NavItem>
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
}
