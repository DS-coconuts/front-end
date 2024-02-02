import React from 'react';
import styled from 'styled-components';
import ResultGraph from '../components/ResultGraph';
import '../fonts/index.css';

const PageContainer = styled.div`
    width: 100%;
    height: 800px;
    padding: 100px;
    background: #132043;
    margin: 0 auto;
    font-family:'NanumSquareNeo-Variable'; 
`;


const ResultTitle = styled.div`
    color: #FFFFFF;
    font-size: 35px;
    text-align: center;
    margin: 0 auto;
    width: 700px;
    padding: 30px;
    font-family:'DNFBitBitv2';
`

const ResultBox = styled.div`
    display: flex;
    align-items: center;
    margin: 0px auto;
    padding: 20px;
    width: 700px;
    height: 450px;
    border-radius: 30px;
    background-color: rgba( 255, 255, 255, 0.3 );
`

const ResultContent = styled.div`
    margin: 30px 13px;
    padding: 7px 40px;
    width: 120px;
    text-align: left;
`

const Title = styled.div`
    width: 100px;   
    font-size: 18px;
    color: #FFFFFF;
`

const Text = styled.div`
    width: 100px;
    font-size: 34px;
    color: #F1B4BB;
    font-weight: bold;
`

const GraphBox = styled.div`
    margin: 0 auto;
`

const CharContent = styled.div`
    margin: 0px 13px;
    margin-top: 18px;
    padding: 0px 40px;
    width: 200px;
    text-align: left;
`

const ResultsPage = () => {
    return (
        <PageContainer>
           <ResultTitle>RESULT</ResultTitle>
           <ResultBox>
                <div>
                <ResultContent>
                    <Title>acc</Title>
                    <Text>98%</Text>
                </ResultContent>
                <ResultContent>
                    <Title>wpm</Title>
                    <Text>47</Text>
                </ResultContent>
                <ResultContent>
                    <Title>time</Title>
                    <Text>1:39</Text>
                </ResultContent>
                </div>
                <GraphBox>
                    <ResultGraph />
                    <CharContent>
                        <Title>Characters</Title>
                        <Text>309/373/21%</Text>
                    </CharContent>
                </GraphBox>
           </ResultBox>
        </PageContainer>
    );
};

export default ResultsPage;
