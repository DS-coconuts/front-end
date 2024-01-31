import React from "react";
import styled from "styled-components"

const FooterContainer = styled.div`
  width: 100%;
  background-color: #fdf0f0;
  justify-content: center;
  padding: 15px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 14px;
  color: #132043;
  text-align: center;
`;

const Footer = () => {
  return(
  <FooterContainer>
    <Text>© 2024 코타다 All Rights Reserved.</Text>
    <Text>코코넛츠 coconut’s</Text>
  </FooterContainer>
  );
};

export default Footer;