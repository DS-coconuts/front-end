import React, {useState} from 'react';
import styled from 'styled-components';
import RankingList from '../components/RankingList';
import userIconPink from "../assets/icons/userIcon_pink.png";
import userIconGreen from "../assets/icons/userIcon_green.png";
import userIconBrown from "../assets/icons/userIcon_brown.png";
import RankingFilter from '../components/RankingFilter';
import { rankingData } from "../assets/data/rankingData";

const PageContainer = styled.div`
    width: 100%;
    height: 800px;
    padding: 100px;
    background: #132043;
    margin: 0 auto;
    font-family:'NanumSquareNeo'; 
`;

const RankContent = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 800px;
`

const RankTitle = styled.div`
    color: #FFFFFF;
    font-size: 35px;
    text-align: center;
    margin: 0 auto;
    padding: 30px 0 0 30px;
    width: 700px;
    font-family:'bitbit';
`

const RankWrapper = styled.div`
    background-color: rgba( 255, 255, 255, 0.3 );
    margin: 0 30px;
    padding: 10px 0;
    width: 800px;
    height: 500px;
    border-radius: 20px;
`

const Subtitle = styled.div`
    font-size: 21px;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-item: center;
    padding: 0 60px;
    margin: 20px 23px;
    font-family:'bitbit';
`

const getOrdinalSuffix = (rank) => {
    const suffixes = ["th", "st", "nd", "rd"];
    const v = rank % 100;
    return (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

const RankingPage = () => {
    const [rankings, setRankings] = useState(rankingData.results);
    console.log("ranking data: ", rankings);
    const sortedRanks = rankings.sort((a, b) => parseInt(b.cpm) - parseInt(a.cpm));
    
    return (
        <PageContainer>
             <RankTitle>RANKING</RankTitle>
             <RankContent>
                <RankingFilter />
                <RankWrapper>
                    <Subtitle>
                        <div>Rank</div>
                        <div>Name</div>
                        <div>Score</div>
                    </Subtitle>
                {sortedRanks.map((rank, index) => (
                    <RankingList
                    key={rank.scoreId}
                    rank={`${(index + 1)}${getOrdinalSuffix(index + 1)}`}
                    img={rank.user.image}
                    id={rank.user.loginId}
                    score={rank.cpm}
                    lang={rank.language}
                    />
                ) )}
            </RankWrapper>
            </RankContent>
        </PageContainer>
    );
};

export default RankingPage;
