import React from 'react';
import styled from 'styled-components';

const HistoryBox = styled.div`
  padding: 10px 20px;
  width: 90%;
  border: none;
  border-radius: 15px;
  background-color: #49546E;
  margin: 10px 0px;
`;

const FnText = styled.p`
  margin: 0px;
  font-size: 40px;
  color: #f1b4bb;
  font-family: 'bitbit';
`;

const InfoText = styled.p`
  font-size: 32px;
  color: #fff;
  font-family: 'NanumSquareNeo';
  margin: 0px 0px 10px 0px;
  text-align: left;
`;

const TypingHistory = ({language, cpm, createdAt}) => {
  return (
    <HistoryBox>
      <FnText>{language}</FnText>
      <InfoText>달성 타수: {cpm}타</InfoText>
      <InfoText>날짜: {createdAt}</InfoText>
    </HistoryBox>
  );
};

export default TypingHistory;
