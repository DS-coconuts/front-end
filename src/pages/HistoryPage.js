import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from "axios";

import TypingHistory from '../components/TypingHistory';

import logo_C from '../assets/icons/logo_C.png';
import logo_HTML from '../assets/icons/logo_HTML.png';
import logo_python from '../assets/icons/logo_python.png';
import logo_JAVA from '../assets/icons/logo_JAVA.png';
import logo_JavaScript from '../assets/icons/logo_JavaScript.png';

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

const LanButton = styled.button`
  cursor: pointer;
  padding: 10px 10px;
  margin: 5px;
  width: 130px;
  height: 50px;
  border: none;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  &:hover,
  &:focus {
    background-color: #F1B4BB;
    transition: 0.5s;
  }
`;

const LanButtons = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HistoryContainer = styled.div`
  width: 90%;
  overflow-y: auto;  /* 스크롤 기능 활성화 */
  &::-webkit-scrollbar {
    background-color: rgba(241, 180, 187, 0.3); /* 투명도 설정 */
    border-radius: 10px; /* 선택적으로 테두리 반경 설정 */
    width: 5px; /* 스크롤바 너비 */
    height: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(241, 180, 187, 0.7); /* 스크롤바 색상 */
    border-radius: 10px;
  }
`;

// const dummydata = [
//   {
//     "scoreId": 1,
//     "cpm": 530,
//     "createdAt": "2024-01-28",
//     "language": "C"
//   },
//   {
//     "scoreId": 2,
//     "cpm": 556,
//     "createdAt": "2024-02-01",
//     "language": "python"
//   },
// ]

const HistoryPage = () => {
  const storedUserId = localStorage.getItem("userId");
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [ScoreItems, setScoreItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/users/scores?userId=${storedUserId}`);
        // console.log('response:', response.data);
        const data = response.data.data.map(item => ({
          scoreId: item.id,
          cpm: item.cpm,
          createdAt: item.createdAt,
          language: item.language,
        }));
        // console.log(ScoreItems);
        setScoreItems(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  // 필터 기능
  const handleLanguageClick = (language) => {
    setSelectedLanguage((prevLanguage) => (prevLanguage === language ? null : language));
  };

  const filteredScores = selectedLanguage
    ? ScoreItems.filter((item) => item.language === selectedLanguage)
    : ScoreItems;

  return (
    <PageContainer>
      <Box>
        <LanButtons>
          <LanButton onClick={() => handleLanguageClick('Python')}>
            <img src={logo_python} alt={'logo_python'} style={{ width: 'auto', height: '33px', marginTop: '2px'}} />
          </LanButton>
          <LanButton onClick={() => handleLanguageClick('Java')}>
            <img src={logo_JAVA} alt={'logo_JAVA'} style={{ width: 'auto', height: '35px', marginTop: '-5px'}} />
          </LanButton>
          <LanButton onClick={() => handleLanguageClick('C')}>
            <img src={logo_C} alt={'logo_C'} style={{ width: 'auto', height: '35px', marginTop: '-2px'}} />
          </LanButton>
          <LanButton onClick={() => handleLanguageClick('HTML')}>
            <img src={logo_HTML} alt={'logo_HTML'} style={{ width: 'auto', height: '35px', marginTop: '-2px'}} />
          </LanButton>
          <LanButton onClick={() => handleLanguageClick('JavaScript')}>
            <img src={logo_JavaScript} alt={'logo_JavaScript'} style={{ width: 'auto', height: '35px', marginTop: '-2px'}} />
          </LanButton>
        </LanButtons>
        <HistoryContainer>
          {filteredScores.map((value) => (
            <TypingHistory 
              key={value.scoreId}
              language={value.language}
              cpm={value.cpm}
              createdAt={value.createdAt}
            />
          ))}
        </HistoryContainer>
      </Box>
    </PageContainer>
    );
};

export default HistoryPage;
