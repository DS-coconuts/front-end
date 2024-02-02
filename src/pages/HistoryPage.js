import React from 'react';
import styled from 'styled-components';

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
  height: 100%;
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
  padding: 10px 10px;
  margin: 5px;
  width: 130px;
  height: 50px;
  border: none;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
`;

const LanButtons = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const dummydata = [
  {
    "scoreId": 1,
    "cpm": 530,
    "createdAt": "2024-01-28",
    "language": "C"
  },
  {
    "scoreId": 2,
    "cpm": 556,
    "createdAt": "2024-02-01",
    "language": "python"
  },
]

const HistoryPage = () => {
  return (
    <PageContainer>
      <Box>
        <LanButtons>
          <LanButton>
            <img src={logo_python} alt={'logo_python'} style={{ width: 'auto', height: '30px'}} />
          </LanButton>
          <LanButton>
            <img src={logo_JAVA} alt={'logo_JAVA'} style={{ width: 'auto', height: '30px'}} />
          </LanButton>
          <LanButton>
            <img src={logo_C} alt={'logo_C'} style={{ width: 'auto', height: '30px'}} />
          </LanButton>
          <LanButton>
            <img src={logo_HTML} alt={'logo_HTML'} style={{ width: 'auto', height: '30px', marginTop: '2px'}} />
          </LanButton>
          <LanButton>
            <img src={logo_JavaScript} alt={'logo_JavaScript'} style={{ width: 'auto', height: '33px'}} />
          </LanButton>
        </LanButtons>
        {dummydata.map((value) => (
          <TypingHistory 
            language={value.language}
            cpm={value.cpm}
            createdAt={value.createdAt}
          />
        ))}
      </Box>
    </PageContainer>
    );
};

export default HistoryPage;
