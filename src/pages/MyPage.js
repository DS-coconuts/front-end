import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import userIcon from "../assets/icons/userIcon_green.png";

const PageContainer = styled.div`
  background-color: #132043;
  padding: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 700px;
`;

const Box = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 800px;
  height: 500px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

const TextLink = styled(Link)`
  text-decoration: none;
  font-size: 21px;
  color: #f1b4bb;
  font-family: "bitbit";
  align-self: flex-end;
  margin: 10px 10px;
`;

const GoalButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  background-color: #1f4172;
  color: #f1b4bb;
  font-size: 30px;
  font-family: "bitbit";
`;

const FriendButton = styled.button`
  padding: 3px 20px;
  border: none;
  border-radius: 15px;
  background-color: #49546e;
  color: #f1b4bb;
  font-size: 30px;
  font-family: "bitbit";
  &:hover {
    background-color: #1f4172;
    transition: 0.5s;
  }
`;

const FriendLink = styled(Link)`
  align-self: flex-start;
  margin: 15px 25px;
`;

const ProfilBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 60px;
`;

const ProfilText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 0px 0px 30px;
  width: 400px;
`;

const InfoTitleText = styled.p`
  font-size: 42px;
  color: #fff;
  font-family: "bitbit";
  margin: 0px;
`;

const InfoText = styled.p`
  font-size: 24px;
  color: #fff;
  font-family: "NanumSquareNeo";
  margin: 0px 0px 10px 0px;
  text-align: left;
`;

const FnTitleText = styled.p`
  margin: 0px;
  font-size: 24px;
  color: #f1b4bb;
  font-family: "bitbit";
`;

const FnText = styled.p`
  margin: 0px;
  font-size: 18px;
  color: #fff;
  font-family: "NanumSquareNeo";
  text-align: left;
`;

const FnTextBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HistoryButton = styled.button`
  padding: 10px 20px;
  width: 730px;
  border: none;
  border-radius: 15px;
  background-color: #49546e;
  &:hover {
    background-color: #1f4172;
    transition: 0.5s;
  }
`;


export default function MyPage() {
  const { userId } = useParams();
  const storedUserId = localStorage.getItem("userId");
  const [userData, setUserData] = useState({
    loginId: "",
    introduction: "",
    image: userIcon,
    goalCpm: null,
  });
  const [scoreData, setScoreData] = useState({
    createdAt: "",
    cpm: "",
    language: "",
  });
  const [isCurrentUser, setIsCurrentUser] = useState(false);

  const handleTextLinkClick = (event) => {
    if (!isCurrentUser) {
      event.preventDefault();
      // 비활성화 된 경우 실행할 작업 추가
    }
  };

  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/users/detail?userId=${userId}`
        );
        const data = response.data;

        if (data.status === 200 && data.code === "SUCCESS_GET_PROFILE") {
          setUserData(data.data);
          setIsCurrentUser(userId === storedUserId);
        }
      } catch (error) {
        console.error("마이 페이지 정보 불러오기 오류 발생:", error);
      }
    };

    fetchUserData();
    const fetchCpmData = async () => {
      try {
        const scoreResponse = await axios.get(
          `http://localhost:8080/api/users/scores?userId=${userId}`
        );
        const data = scoreResponse.data;

        if (
          data.status === 200 &&
          data.code === "SUCCESS_GET_USER_SCORES_LIST"
        ) {
          const latestScore = data.data[0];
          setScoreData({
            createdAt: latestScore.createdAt,
            cpm: latestScore.cpm,
            language: latestScore.language,
          });
        }
      } catch (error) {
        console.error("최근 기록 불러오기 오류 발생:", error);
        setScoreData(null);
      }
    };
    fetchCpmData();
  }, [userId, storedUserId]);


  return (
    <PageContainer>
      <Box>
      <TextLink to={isCurrentUser ? "/editprofile" : "#"} onClick={handleTextLinkClick}>
          편집
        </TextLink>
        <ProfilBox>
          <img
            src={userData.image || userIcon}
            alt={"userIcon"}
            style={{ width: "auto", height: "230px" }}
          />
          <ProfilText>
            <InfoTitleText>{userData.loginId}</InfoTitleText>
            <InfoText>{userData.introduction}</InfoText>
            <GoalButton>목표 타수: {userData.goalCpm}</GoalButton>
          </ProfilText>
        </ProfilBox>
        <FriendLink to={isCurrentUser ? "/friendlist" : "#"}>
          <FriendButton>팔로우 목록</FriendButton>
        </FriendLink>
        {scoreData ? (
          <Link to={isCurrentUser ? "/history" : "#"}>
            <HistoryButton>
              <FnTextBox>
                <FnTitleText>{scoreData.language}</FnTitleText>
                <FnTitleText>기록 더보기</FnTitleText>
              </FnTextBox>
              <FnText>달성 타수: {scoreData.cpm}타</FnText>
              <FnText>날짜: {scoreData.createdAt}</FnText>
            </HistoryButton>
          </Link>
        ) : null}
      </Box>
    </PageContainer>
  );
}
