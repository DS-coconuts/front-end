import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import logo_C from '../assets/icons/logo_C.png';
import logo_HTML from '../assets/icons/logo_HTML.png';
import logo_python from '../assets/icons/logo_python.png';
import logo_JAVA from '../assets/icons/logo_JAVA.png';
import logo_JavaScript from '../assets/icons/logo_JavaScript.png';

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #132043;
  height: 700px;
  padding: 100px;
`;

const TitleText = styled.p`
  font-size: 80px;
  color: #f1b4bb;
  font-family: 'bitbit';
  margin: 0px;
`;

const SubTitleText = styled.p`
  font-size: 24px;
  color: #fff;
  font-family: 'NanumSquareNeo';
  margin: 100px 0px;
`;

const LoginTextLink = styled(Link)`
  text-decoration: none;
  font-size: 40px;
  color: #f1b4bb;
  font-family: 'bitbit';
  margin-top: 100px;
`

const LanButton = styled.button`
  padding: 10px 10px;
  margin: 15px;
  width: 250px;
  height: 100px;
  border: none;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
`;

const LanButtons = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainPage = () => {
  return (
    <PageContainer>
      <TitleText>Typing Practice for Programmers</TitleText>
      <SubTitleText>연습하고 싶은 언어를 선택하세요.</SubTitleText>

      <LanButtons>
        <Link to="/typing">
          <LanButton>
            <img src={logo_python} alt={'logo_python'} style={{ width: 'auto', height: '50px'}} />
          </LanButton>
        </Link>
        <LanButton>
          <img src={logo_JAVA} alt={'logo_JAVA'} style={{ width: 'auto', height: '75px'}} />
        </LanButton>
        <LanButton>
          <img src={logo_C} alt={'logo_C'} style={{ width: 'auto', height: '75px'}} />
        </LanButton>
      </LanButtons>
      <LanButtons>
        <LanButton>
          <img src={logo_HTML} alt={'logo_HTML'} style={{ width: 'auto', height: '60px', marginTop: '5px'}} />
        </LanButton>
        <LanButton>
          <img src={logo_JavaScript} alt={'logo_JavaScript'} style={{ width: 'auto', height: '80px'}} />
        </LanButton>
      </LanButtons>
        
      <LoginTextLink to="/login">
        로그인하러 가기 →
      </LoginTextLink>
    </PageContainer>
  );
};

export default MainPage;
