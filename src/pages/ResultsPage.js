import React from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';
import ResultGraph from '../components/ResultGraph';


import { GrNext } from "react-icons/gr";
import { VscDebugRestart } from "react-icons/vsc";
import { FaRankingStar } from "react-icons/fa6";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import ResultIcon from '../components/ResultIcon';

const PageContainer = styled.div`
  width: 100%;
  height: 800px;
  padding: 100px;
  background: #132043;
  margin: 0 auto;
  font-family:'NanumSquareNeo'; 
`;


const ResultTitle = styled.div`
  color: #FFFFFF;
  font-size: 35px;
  text-align: center;
  margin: 0 auto;
  width: 700px;
  padding: 30px;
  font-family:'bitbit';
`;

const ResultBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0px auto;
  padding: 20px;
  width: 700px;
  height: 450px;
  border-radius: 30px;
  background-color: rgba( 255, 255, 255, 0.3 );
`;

const ResultContent = styled.div`
  margin: 30px 13px;
  padding: 7px 40px;
  width: 120px;
  text-align: left;
`;

const Title = styled.div`
  width: 100px;   
  font-size: 18px;
  color: #FFFFFF;
`;

const Text = styled.div`
  width: 100px;
  font-size: 34px;
  color: #F1B4BB;
  font-weight: bold;
`;

const GraphBox = styled.div`
  margin: 0 auto;
`;

const CharContent = styled.div`
  margin: 0px 13px;
  margin-top: 18px;
  padding: 0px 40px;
  width: 200px;
  text-align: left;
`;

const IconBox = styled.div`
  margin: 15px auto;
  padding: 0;
  width: 600px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const ResultsPage = () => {
  const location = useLocation();

  if (!location.state) {
    return (
      <PageContainer>
        <ResultTitle>RESULT</ResultTitle>
        <ResultBox>
          <p style={{textAlign: 'center'}}>결과 데이터가 유효하지 않습니다.</p>
        </ResultBox>
        <IconBox>
          <ResultIcon icon={GrNext} />
          <ResultIcon icon={VscDebugRestart} />
          <ResultIcon icon={FaRankingStar} />
          <ResultIcon icon={MdPhotoSizeSelectActual} />
        </IconBox>
    </PageContainer>
    );
  }
  
  const { cpm, wpm, acc, elapsedTime } = location.state;
  console.log(cpm, wpm, acc, elapsedTime);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <PageContainer>
      <ResultTitle>RESULT</ResultTitle>
      <ResultBox>
        <div>
        <ResultContent>
          <Title>acc</Title>
          <Text>{acc}%</Text>
        </ResultContent>
        <ResultContent>
          <Title>wpm</Title>
          <Text>{wpm}</Text>
        </ResultContent>
        <ResultContent>
          <Title>time</Title>
          <Text>{formatTime(elapsedTime)}</Text>
        </ResultContent>
        </div>
        <GraphBox>
          <ResultGraph />
          <CharContent>
              <Title>Characters</Title>
              <Text>{cpm}</Text>
          </CharContent>
        </GraphBox>
      </ResultBox>
      <IconBox>
        <ResultIcon icon={GrNext} />
        <ResultIcon icon={VscDebugRestart} />
        <ResultIcon icon={FaRankingStar} />
        <ResultIcon icon={MdPhotoSizeSelectActual} />
      </IconBox>
    </PageContainer>
  );
};

export default ResultsPage;
