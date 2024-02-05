import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import ProfileImg from "../assets/icons/UserProfileSymbol.svg";

const PageContainer = styled.div`
  background-color: #132043;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; /* 세로 중앙 정렬을 위한 추가 설정 */
  font-family: "NanumSquareNeo";
`;

const UserProfileWrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 20px;
  justify-content: center;
`;

const UserProfileImg = styled.img`
  width: auto; /* 로고의 너비를 조절할 수 있습니다. */
  height: 150px; /* 높이를 자동으로 조절하여 비율을 유지합니다. */
  margin-bottom: 20px; /* 로고와 텍스트 사이에 여백을 주기 위한 추가 설정 */
`;

const UserProfileChangeButton = styled.label`
  width: 220px;
  height: 40px;
  border-radius: 15px;
  background: #f1b4bb;
  color: #132043;
  text-align: center;
  font-size: 20px;
  display: flex;
  align-items: center; /* 세로 방향에서 중앙 정렬을 위해 추가 */
  justify-content: center; /* 가로 방향에서 중앙 정렬을 위해 추가 */
  cursor: pointer;
  font-family: "bitbit";
`;

const HiddenFileInput = styled.input`
  display: none;
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
  font-size: 25px;
  display: flex;
  align-items: center; /* 세로 방향에서 중앙 정렬을 위해 추가 */
  justify-content: center; /* 가로 방향에서 중앙 정렬을 위해 추가 */
  cursor: pointer;
  font-family: "bitbit";
`;

const EditProfilePage = () => {
  const [userIntroduction, setUserIntroduction] = useState("");
  const [userGoalCpm, setUserGoalCpm] = useState("");
  const [previewImage, setPreviewImage] = useState();
  const [userImage, setUserImage] = useState();

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/users/detail?userId=${userId}`
        );
        const userData = response.data.data;
        setUserIntroduction(userData.introduction);
        setUserGoalCpm(userData.goalCpm);
        setUserImage(userData.image);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, [userId]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPreviewImage(e.target.result); // 이미지 미리보기 업데이트
        setUserImage(file); // 실제 이미지 데이터 업데이트
      };

      reader.readAsDataURL(file);
    }
  };

  // handleEdit 함수에서 formData에 이미지를 추가할 때의 조건문 수정
  const handleEdit = () => {
    // 수정된 정보를 서버에 전송
    const formData = new FormData();

    const infoData = {
      introduction: userIntroduction,
      goalCpm: userGoalCpm,
    };
    formData.append("info", JSON.stringify(infoData));

    formData.append("introduction", userIntroduction);
    formData.append("goalCpm", userGoalCpm);

    // 이미지가 선택되었을 때만 FormData에 추가
    if (userImage instanceof File) {
      formData.append("image", userImage);
    }

    axios
      .put(`http://localhost:8080/api/users/update?userId=${userId}`, formData)
      .then((response) => {
        const updatedUserData = response.data.data;
        setUserIntroduction(updatedUserData.introduction);
        setUserGoalCpm(updatedUserData.goalCpm);
        setUserImage(updatedUserData.image);
        console.log(updatedUserData);

        alert("수정 완료!");
        window.location.href = `/my/${userId}`;
      })
      .catch((error) => {
        console.error("Error editing user data:", error);
      });
  };

  return (
    <PageContainer>
      <UserProfileWrapper onSubmit={handleImageChange}>
        <UserProfileImg
          src={previewImage || userImage || ProfileImg}
          alt="ProfileImg"
        />
        <UserProfileChangeButton>
          프로필 사진 변경
          <HiddenFileInput
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e)}
          />
        </UserProfileChangeButton>
      </UserProfileWrapper>
      <UserInformationWrapper>
        <UserIntroWrapper>
          <UserIntroLabel>한 줄 소개</UserIntroLabel>
          <UserIntroInput
            type="text"
            placeholder={userIntroduction}
            onChange={(e) => setUserIntroduction(e.target.value)}
          />
        </UserIntroWrapper>
        <UserGoalWrapper>
          <UserGoalLabel>목표 타수</UserGoalLabel>
          <UserGoalInput
            type="text"
            placeholder={userGoalCpm}
            onChange={(e) => setUserGoalCpm(e.target.value)}
          />
        </UserGoalWrapper>
      </UserInformationWrapper>
      <EditButton onClick={handleEdit}>수정</EditButton>
    </PageContainer>
  );
};

export default EditProfilePage;
