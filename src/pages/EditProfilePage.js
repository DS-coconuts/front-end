import React from "react";
import styled from "styled-components";
import ProfileImg from "../assets/icons/UserProfileSymbol.svg";

const PageContainer = styled.div`
  background-color: #132043;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; /* 세로 중앙 정렬을 위한 추가 설정 */
`;

const UserProfileWrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const UserProfileImg = styled.img`
  width: auto; /* 로고의 너비를 조절할 수 있습니다. */
  height: 150px; /* 높이를 자동으로 조절하여 비율을 유지합니다. */
  margin-bottom: 20px; /* 로고와 텍스트 사이에 여백을 주기 위한 추가 설정 */
`;

const UserProfileChangeButton = styled.div`
  width: 220px;
  height: 40px;
  border-radius: 15px;
  background: #f1b4bb;
  color: #132043;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center; /* 세로 방향에서 중앙 정렬을 위해 추가 */
  justify-content: center; /* 가로 방향에서 중앙 정렬을 위해 추가 */
  cursor: pointer;
`;
const UserInformationWrapper = styled.div`
  width: 400px;
  color: #132043;
`;
const UserIntroWrapper = styled.div`
  height: 100px;
  border-radius: 15px 15px 0px 0px;
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

const EditButton = styled.div`
  width: 400px;
  height: 60px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 15px;
  background: #f1b4bb;
  color: #132043;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  display: flex;
  align-items: center; /* 세로 방향에서 중앙 정렬을 위해 추가 */
  justify-content: center; /* 가로 방향에서 중앙 정렬을 위해 추가 */
  cursor: pointer;
`;

const EditProfilePage = () => {
  return (
    <PageContainer>
      <UserProfileWrapper>
        <UserProfileImg src={ProfileImg} alt="ProfileImg" />
        <UserProfileChangeButton>프로필 사진 변경</UserProfileChangeButton>
      </UserProfileWrapper>
      <UserInformationWrapper>
        <UserIntroWrapper>
          <UserIntroLabel>한 줄 소개</UserIntroLabel>
          <UserIntroInput type="text" placeholder="" />
        </UserIntroWrapper>
        <UserGoalWrapper>
          <UserGoalLabel>목표 타수</UserGoalLabel>
          <UserGoalInput type="number" placeholder="" />
        </UserGoalWrapper>
      </UserInformationWrapper>
      <EditButton>수정</EditButton>
    </PageContainer>
  );
};

export default EditProfilePage;
