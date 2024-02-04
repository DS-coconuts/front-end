import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios";

import { VscDebugRestart } from "react-icons/vsc";
import ResultIcon from '../components/ResultIcon';

const PageContainer = styled.div`
  background-color: #132043;
  padding: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const Box = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 70%;
  height: 100%;
  border-radius: 20px;
  background-color: #313D5B;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

const SourceText = styled.p`
  font-size: 10px;
  color: #fff;
  font-family: 'NanumSquareNeo';
`;

const TimerBox = styled.div`
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  padding: 0px 20px;
  border: none;
  border-radius: 15px;
  background-color: #1F4172;
  color: #f1b4bb;
  font-size: 40px;
  font-family: 'bitbit';
  margin-bottom: 15px;
`;

const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  height: 50px;
  width: 970px;
  margin-top: 10px;
`;

const TextCode = styled.pre`
  font-family: 'D2 coding';
  font-size: 16px;
  margin: 0;
  color: #aaa;
  position: relative;
  white-space: pre-wrap; /* 텍스트 줄 바꿈 처리 */
  word-wrap: break-word;
  overflow: hidden;

`;

const TextInput = styled.textarea`
  font-family: 'D2 coding';
  width: 100%;
  height: 100%;
  outline: none;
  font-size: 16px;
  color: #fff;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: 0px;
  resize: none;
  background: rgba(241, 180, 187, 0.0);
`;

const TextBox = styled.div`
  margin: 5px;
`

const IconBox = styled.div`
  margin: 15px auto;
  padding: 0;
  width: 600px;
  display: flex;
  align-items: center;
  text-align: center;
`

const TypingPage = () => {
  const storedUserId = localStorage.getItem("userId");
  const { value } = useParams();
  const languageString = typeof value === 'object' ? value.language.toString() : value;
  const navigate = useNavigate();

  const [codeData, setCodeData] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [timer, setTimer] = useState(0);
  const [results, setResults] = useState({
    cpm: 0,
    wpm: 0,
    acc: 0,
  });
  const [elapsedTime, setElapsedTime] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  
  useEffect(() => {
    if (timer === 0) {
      axios.get(`http://localhost:8080/api/data?language=${value}`)
        .then(response => {
          const data = response.data;
          // console.log(data);
          setCodeData(data);
        })
        .catch(error => console.error('Error:', error));
    }
      let intervalId;
      if (timer) {
        intervalId = setInterval(() => {
          const elapsed = Date.now() - timer;
          setElapsedTime(elapsed);
        }, 1000);
      }
      return () => {
        clearInterval(intervalId);
      };
  }, [value, timer]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const startTimer = () => {
    setTimer(Date.now());
  };

  const checkAndSubmitResult = () => {
    // console.log(userInput.length, codeData.data.fileContent.length);
    // 사용자가 입력한 문자열과 코드 예문의 길이 비교
    if (userInput.length === codeData.data.fileContent.length) {
      // 결과 계산 및 서버로 전송
      // 서버로 결과 전송
      axios.post('http://localhost:8080/api/scores/create', {
        userId: storedUserId,
        dataId: codeData.data.dataId,
        cpm: results.cpm,
        wpm: results.wpm,
        acc: results.acc,
        countTime: Math.floor(elapsedTime / 1000),
        language: languageString
      })
      .then(response => {
        // console.log('Result sent to server:', response.data);
        // 결과 페이지로 이동
        navigate('/results', { state: { cpm: results.cpm, wpm: results.wpm, acc: results.acc, elapsedTime } });
      })
      .catch(error => console.error('Error:', error));
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setUserInput(value);

    // 사용자가 입력을 시작한 시점에서 타이머를 시작
    if (!timer) {
      startTimer();
    }

    // 코드 데이터가 아직 로드되지 않은 경우
    if (!codeData || !codeData.data.fileContent) {
      return;
    }

    // 정확도 계산
    const correctChars = codeData.data.fileContent;
    let correctCount = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] === correctChars[i]) {
        correctCount++;
      }
    }
    const accuracy = Math.floor((correctCount / correctChars.length) * 100);

    // 타자 속도 계산
    const wordsPerMinute = Math.floor(value.split(' ').length / (elapsedTime / 60000));
    const charactersPerMinute = Math.floor(value.length / (elapsedTime / 60000));

    // 결과 업데이트
    setResults({
      acc: accuracy,
      wpm: wordsPerMinute,
      cpm: charactersPerMinute,
    });

    // 오타 검출
    if (value !== codeData.data.fileContent.slice(0, value.length)) {
      const index = value.length - 1;
      setHighlightedIndex(index);
    } else {
      setHighlightedIndex(-1);
    }
    checkAndSubmitResult();
  };

  // 리셋
  const handleReset = () => {
    setUserInput('');
    setTimer(0);
    setResults({
      acc: 0,
      wpm: 0,
      cpm: 0,
    });
    setElapsedTime(0);
    setHighlightedIndex(0);
  };

  // 탭 > 공백 4개 치환
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      // 현재 입력된 텍스트를 가져옴
      const currentValue = userInput;
      // 현재 커서의 위치를 가져옴
      const cursorPosition = e.target.selectionStart;
      // 새로운 값에 공백 4개를 추가
      const newValue = currentValue.substring(0, cursorPosition) + '    ' + currentValue.substring(cursorPosition);
      // 새로운 값을 입력란에 설정
      setUserInput(newValue);
      // 커서의 위치를 조정
      e.target.setSelectionRange(cursorPosition + 4, cursorPosition + 4);
    }
  };

  return (
    <PageContainer>
      <TopBox>
        {/* <SourceText>// Copyright (c) Microsoft Open Technologies, Inc. All rights reserved, ...(출처)</SourceText> */}
        <TimerBox>{formatTime(elapsedTime)}</TimerBox>
      </TopBox>
      <Box>
        <TextBox>
          {codeData ? (
            <TextCode>
              {codeData.data.fileContent}
              <TextInput
                type="text"
                value={userInput}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                style={{
                  color: highlightedIndex >= 0 ? '#ff0000' : '#fff',
                }}
              />
            </TextCode>
          ) : (
            <p>Loading...</p>
          )}
        </TextBox>
      </Box>
      <IconBox>
        <ResultIcon icon={VscDebugRestart} onClick={handleReset} />
      </IconBox>
    </PageContainer>
  );
};

export default TypingPage;
