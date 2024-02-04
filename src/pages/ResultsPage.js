import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';

import styled from 'styled-components';
import ResultGraph from '../components/ResultGraph';
import { useParams } from 'react-router-dom';

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
  const navigate = useNavigate();

  const storedUserId = localStorage.getItem("userId");

  if (!location.state) {
    return (
      <PageContainer>
        <ResultTitle>RESULT</ResultTitle>
        <ResultBox>
          <p style={{textAlign: 'center'}}>결과 데이터가 유효하지 않습니다.</p>
        </ResultBox>
    </PageContainer>
    );
  }
  
  const { cpm, wpm, acc, elapsedTime } = location.state;
  // console.log(cpm, wpm, acc, elapsedTime);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleMy = () => {
    navigate(`/my/${storedUserId}`);
  };

  const handleMain = () => {
    navigate('/');
  };

  const handleReanking = () => {
    navigate('/ranking');
  };

  const handleCapture = () => {
    // 현재 컴포넌트를 캡쳐하고 이미지로 변환
    html2canvas(document.getElementById('capture-component')).then(canvas => {
      // 캡쳐한 이미지를 데이터 URL로 변환
      const imageDataUrl = canvas.toDataURL();
      // 데이터 URL을 이용하여 이미지 다운로드
      const link = document.createElement('a');
      link.href = imageDataUrl;
      link.download = 'captured-image.png';
      link.click();
    });
  };

  return (
    <PageContainer id="capture-component">
        <ResultTitle>RESULT</ResultTitle>
        <ResultBox>
          <div >
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
        <ResultIcon icon={GrNext} onClick={handleMy} />
        <ResultIcon icon={VscDebugRestart} onClick={handleMain} />
        <ResultIcon icon={FaRankingStar} onClick={handleReanking} />
        <ResultIcon icon={MdPhotoSizeSelectActual} onClick={handleCapture} />
      </IconBox>
    </PageContainer>
  );
};

export default ResultsPage;
