import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

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
  padding: 10px 20px;
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
`;

const TextInput = styled.input`
  width: 970px;
  height: 20px;
  outline: none;
  font-size: 16px;
  color: #132043;
  border: none;
  // border-bottom: 3px solid #f1b4bb;
  // background-color: transparent;
  background-color: #fff;
  font-family: 'D2 coding';
`;

const TextCode = styled.p`
  font-family: 'D2 coding';
  margin: 0px;
  color: #fff;
`

const TextBox = styled.div`
  margin: 5px;
`

const TypingPage = () => {
  const exampleSentences = [
    'namespace System.Web.Razor.Parser',
    '      public partial class CSharpCodeParser : TokenizerBackedParser<CSharpTokenizer,  CSharpSymbol, CSharpSymbolType>',
    '      {',
    '          internal static readonly int UsingKeywordLength = 5;',
    '          internal static ISet<string> DefaultKeywords = new HashSet<string>()',
    '          {',
    '               “if”,',
    '         }',
    '        public void YourMethodAfterUsingKeyword()',
  ];

  return (
    <PageContainer>
      <TopBox>
        <SourceText>// Copyright (c) Microsoft Open Technologies, Inc. All rights reserved, ...(출처)</SourceText>
        <TimerBox>00:00</TimerBox>
      </TopBox>
      <Box>
      {exampleSentences.map((sentence, index) => (
        <TextBox key={index}>
          <TextCode>{sentence}</TextCode>
          <TextInput/>
        </TextBox>
      ))}
      
      </Box>
    </PageContainer>
  );
};

export default TypingPage;
