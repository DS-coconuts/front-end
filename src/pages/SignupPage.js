import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Logo from "../assets/icons/Logo.svg";
// import ProfileImg from "../assets/icons/UserProfileSymbol.svg";
import IdImg from "../assets/icons/IdSymbol.svg";
import PasswordImg from "../assets/icons/PasswordSymbol.svg";

const PageContainer = styled.div`
  background-color: #132043; /* 원하는 배경색을 여기에 지정하세요 */
  color: white; /* 텍스트 색상을 조절할 수 있습니다. */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; /* 세로 중앙 정렬을 위한 추가 설정 */
  font-family: "NanumSquareNeo";
`;

const LogoImg = styled.img`
  width: 230px; /* 로고의 너비를 조절할 수 있습니다. */
  height: auto; /* 높이를 자동으로 조절하여 비율을 유지합니다. */
  margin-bottom: 20px; /* 로고와 텍스트 사이에 여백을 주기 위한 추가 설정 */
  margin-top: 15px;
`;

// const UserProfileWrapper = styled.div`
//   height: auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const UserProfileImg = styled.img`
//   width: auto; /* 로고의 너비를 조절할 수 있습니다. */
//   height: 70px; /* 높이를 자동으로 조절하여 비율을 유지합니다. */
//   margin-bottom: 10px; /* 로고와 텍스트 사이에 여백을 주기 위한 추가 설정 */
// `;

// const UserProfileChangeButton = styled.label`
//   width: 100px;
//   height: 22px;
//   border-radius: 15px;
//   background: #f1b4bb;
//   color: #132043;
//   text-align: center;
//   font-size: 13px;
//   display: flex;
//   align-items: center; /* 세로 방향에서 중앙 정렬을 위해 추가 */
//   justify-content: center; /* 가로 방향에서 중앙 정렬을 위해 추가 */
//   cursor: pointer;
//   font-family: "bitbit";
// `;

// const HiddenFileInput = styled.input`
//   display: none;
// `;

const UserInformationWrapper = styled.div`
  width: 400px;
  color: #132043;
`;

const UserIdWrapper = styled.div`
  height: 50px;
  border-radius: 15px 15px 0px 0px;
  border-top: 5px solid #f1b4bb; /* top에만 border 적용 */
  border-left: 5px solid #f1b4bb; /* left에만 border 적용 */
  border-right: 5px solid #f1b4bb; /* right에만 border 적용 */
  background: #ffff;
  display: flex;
  align-items: center;
`;

const UserIdIcon = styled.img`
  margin-left: 10px;
  height: auto;
`;

const UserIdLabel = styled.div`
  margin-left: 10px; /* 아이콘과 레이블 사이 간격 조절 */
  font-weight: 600;
`;

const UserIdInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: #132043;
  margin-left: 10px;
`;

const UserPasswordWrapper = styled.div`
  height: 50px;
  background: #ffff;
  display: flex;
  align-items: center;
  border-top: 5px solid #f1b4bb; /* top에만 border 적용 */
  border-left: 5px solid #f1b4bb; /* left에만 border 적용 */
  border-right: 5px solid #f1b4bb; /* right에만 border 적용 */
`;

const UserPasswordIcon = styled.img`
  margin-left: 10px;
  height: auto;
`;
const UserPasswordLabel = styled.div`
  margin-left: 10px; /* 아이콘과 레이블 사이 간격 조절 */
  font-weight: 600;
`;

const UserPasswordInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: #132043;
  margin-left: 10px;
`;

const UserIntroWrapper = styled.div`
  height: 80px;
  border-top: 5px solid #f1b4bb; /* top에만 border 적용 */
  border-left: 5px solid #f1b4bb; /* left에만 border 적용 */
  border-right: 5px solid #f1b4bb; /* right에만 border 적용 */
  background: #fff;
`;

const UserIntroLabel = styled.div`
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
`;

const UserIntroInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: #132043;
  margin-left: 10px;
`;

const UserGoalWrapper = styled.div`
  height: 50px;
  border-radius: 0px 0px 15px 15px;
  border: 5px solid #f1b4bb;
  background: #ffff;
  display: flex;
  align-items: center;
`;

const UserGoalLabel = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-left: 10px; /* 아이콘과 레이블 사이 간격 조절 */
`;

const UserGoalInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: #132043;
  margin-left: 10px;
`;

const SignupButton = styled.div`
  width: 400px;
  height: 50px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 15px;
  background: #f1b4bb;
  color: #132043;
  text-align: center;
  font-size: 25px;
  display: flex;
  align-items: center; /* 세로 방향에서 중앙 정렬을 위해 추가 */
  justify-content: center; /* 가로 방향에서 중앙 정렬을 위해 추가 */
  cursor: pointer;
  font-family: "bitbit";
`;

export default function SignupPage() {
  // const [selectedImage, setSelectedImage] = useState(ProfileImg);
  const [info, setInfo] = useState({
    loginId: "",
    password: "",
    introduction: "",
    goalCpm: 0,
    // image: selectedImage,
  });

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setSelectedImage(file);
  //   setInfo({
  //     ...info,
  //     image: URL.createObjectURL(file),
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/register",
        {
          loginId: info.loginId,
          password: info.password,
          introduction: info.introduction,
          goalCpm: info.goalCpm,
          // image: info.image,
        }
      );
      console.log(response);
      if (response.data.code === "SUCCESS_REGISTER") {
        const userId = response.data.data.id;
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loginId", info.loginId);
        localStorage.setItem("userId", userId); // 사용자 ID를 로컬 스토리지에 저장
        console.log("API 응답 데이터:", response);
        alert("회원가입 성공!");
        // window.location.href = `/`;
      } else {
        alert("회원가입에 실패했습니다.");
      }
    } catch (error) {
      console.error(error);
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <PageContainer>
      <LogoImg src={Logo} alt="Logo" />
      {/* <UserProfileWrapper onSubmit={handleSubmit}>
        <UserProfileImg src={info.image || ProfileImg} alt="ProfileImg" />
        <UserProfileChangeButton>
          프로필 사진 변경
          <HiddenFileInput
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </UserProfileChangeButton>
      </UserProfileWrapper> */}
      <UserInformationWrapper>
        <UserIdWrapper>
          <UserIdIcon src={IdImg} alt="IdImg" />
          <UserIdLabel>아이디</UserIdLabel>
          <UserIdInput
            type="text"
            placeholder=""
            name="loginId"
            onChange={handleChange}
          />
        </UserIdWrapper>
        <UserPasswordWrapper>
          <UserPasswordIcon src={PasswordImg} alt="PasswordImg" />
          <UserPasswordLabel>비밀번호</UserPasswordLabel>
          <UserPasswordInput
            type="password"
            placeholder=""
            name="password"
            onChange={handleChange}
          />
        </UserPasswordWrapper>
        <UserIntroWrapper>
          <UserIntroLabel>한 줄 소개</UserIntroLabel>
          <UserIntroInput
            type="text"
            placeholder=""
            name="introduction"
            onChange={handleChange}
          />
        </UserIntroWrapper>
        <UserGoalWrapper>
          <UserGoalLabel>목표 타수</UserGoalLabel>
          <UserGoalInput
            type="number"
            placeholder=""
            name="goalCpm"
            onChange={handleChange}
          />
        </UserGoalWrapper>
      </UserInformationWrapper>
      <SignupButton onClick={handleSubmit}>회원가입</SignupButton>
    </PageContainer>
  );
}
