import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import userIcon from '../assets/icons/userIcon_pink.png';

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
  background-color: rgba( 255, 255, 255, 0.3 );
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

const TextLink = styled(Link)`
  text-decoration: none;
  font-size: 21px;
  color: #f1b4bb;
  font-family: 'bitbit';
  align-self: flex-end;
  margin: 10px 10px;
`

const GoalButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  background-color: #1F4172;
  color: #f1b4bb;
  font-size: 30px;
  font-family: 'bitbit';
`;

const FriendButton = styled.button`
  padding: 3px 20px;
  border: none;
  border-radius: 15px;
  background-color: #49546E;
  color: #f1b4bb;
  font-size: 30px;
  font-family: 'bitbit';
`;

const FriendLink = styled(Link)`
  align-self: flex-start;
  margin: 15px 25px;
`;

const ProfilBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ProfilText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 0px 0px 30px;
  width: 400px;
`

const InfoTitleText = styled.p`
  font-size: 42px;
  color: #fff;
  font-family: 'bitbit';
  margin: 0px;
`;

const InfoText = styled.p`
  font-size: 24px;
  color: #fff;
  font-family: 'NanumSquareNeo';
  margin: 0px 0px 10px 0px;
  text-align: left;
`;

const FnTitleText = styled.p`
  margin: 0px;
  font-size: 24px;
  color: #f1b4bb;
  font-family: 'bitbit';
`;

const FnText = styled.p`
  margin: 0px;
  font-size: 18px;
  color: #fff;
  font-family: 'NanumSquareNeo';
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
  background-color: #49546E;
`;

const MyPage = () => {
  return (
    <PageContainer>
      <Box>
        <TextLink to="/editprofile">편집</TextLink>
        <ProfilBox>
          <img src={userIcon} alt={'userIcon'} style={{ width: 'auto', height: '230px'}} />
          <ProfilText>
            <InfoTitleText>abc</InfoTitleText>
            <InfoText>안녕하세요. 반갑습니다.</InfoText>
            <GoalButton>목표 타수: 600</GoalButton>
          </ProfilText>
        </ProfilBox>
        <FriendLink to="/friendlist">
          <FriendButton>팔로우 목록</FriendButton>
        </FriendLink>
        <Link to="/history">
          <HistoryButton>
            <FnTextBox>
              <FnTitleText>C</FnTitleText>
              <FnTitleText>기록 더보기</FnTitleText>
            </FnTextBox>
            <FnText>달성 타수: 530타</FnText>
            <FnText>날짜: 2024년 1월 26일</FnText>
          </HistoryButton>
        </Link>
      </Box>
    </PageContainer>
  );
};

export default MyPage;
