import React from 'react';
import styled from 'styled-components';

import userIcon from '../assets/icons/userIcon_pink.png';

const PageContainer = styled.div`
  background-color: #132043;
  padding: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Box = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  height: 100%;
  border-radius: 20px;
  background-color: #313D5B;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  padding: 50px;
`;

const InfoText = styled.p`
  font-size: 18px;
  color: #fff;
`;

const FnText = styled.p`
  font-size: 18px;
  color: #f1b4bb;
`;

const GoalButton = styled.button`
  padding: 10px 20px;
  width: 220px;
  height: 50px;
  border: none;
  border-radius: 15px;
  background-color: #1F4172;
  color: #f1b4bb;
  font-size: 18px;
`;

const FriendButton = styled.button`
  padding: 10px 20px;
  width: 220px;
  height: 50px;
  border: none;
  border-radius: 15px;
  background-color: #1F4172;
  color: #f1b4bb;
  font-size: 18px;
`;

const HistoryButton = styled.button`
  padding: 10px 20px;
  width: 220px;
  height: 50px;
  border: none;
  border-radius: 15px;
  background-color: #1F4172;
  color: #f1b4bb;
  font-size: 18px;
`;

const MyPage = () => {
  return (
    <PageContainer>
      <Box>
        <FnText>편집</FnText>
        <img src={userIcon} alt={'userIcon'} style={{ width: 'auto', height: '150px'}} />
        <InfoText>abc</InfoText>
        <InfoText>한 줄 소개</InfoText>
        <GoalButton>목표 타수: 600</GoalButton>

        <FriendButton>팔로우 목록</FriendButton>
        <HistoryButton>
          <FnText>C</FnText>
          <FnText>기록 더보기</FnText>
          <InfoText>달성 타수: 530타</InfoText>
          <InfoText>날짜: 2024년 1월 26일</InfoText>
        </HistoryButton>
      </Box>
    </PageContainer>
  );
};

export default MyPage;
