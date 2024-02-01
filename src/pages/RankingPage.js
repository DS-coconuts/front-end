import React from 'react';
import styled from 'styled-components';
import RankingList from '../components/RankingList';
import userIconPink from "../assets/icons/userIcon_pink.png";
import userIconGreen from "../assets/icons/userIcon_green.png";
import userIconBrown from "../assets/icons/userIcon_brown.png";


const PageContainer = styled.div`
    height: 800px;
    padding: 150px 500px;
    background: #132043;
    margin: 0 auto;
`;

const RankTitle = styled.div`
    color: #FFFFFF;
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    margin: 0 0 50px 300px;
`

const RankWrapper = styled.div`
    background-color: rgba( 255, 255, 255, 0.3 );
    margin: 0 0 0 300px;
    padding: 10px 0;
    border-radius: 20px;
`

const Subtitle = styled.div`
    font-size: 23px;
    color: #FFFFFF;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-item: center;
    padding: 0 70px;
    margin: 20px 23px;
`

const RankingPage = () => {
    return (
        <PageContainer>
            <RankTitle>Ranking</RankTitle>
            <RankWrapper>
            <Subtitle>
                <div>Rank</div>
                <div>Name</div>
                <div>Score</div>
            </Subtitle>
            <RankingList 
                rank={'1st'}
                img={userIconBrown} 
                altText={'user3Icon'} 
                id={'짱짱'}
                score={'600'}
            />
             <RankingList 
                rank={'2nd'}
                img={userIconGreen} 
                altText={'user2Icon'} 
                id={'dkfjikn'}
                score={'560'}
            />
             <RankingList 
                rank={'3rd'}
                img={userIconPink} 
                altText={'user1Icon'} 
                id={'홍길동'}
                score={'350'}
            />
             <RankingList 
                rank={'4th'}
                img={userIconBrown} 
                altText={'user4Icon'} 
                id={'oekxn'}
                score={'270'}
            />
            </RankWrapper>
        </PageContainer>
    );
};

export default RankingPage;
