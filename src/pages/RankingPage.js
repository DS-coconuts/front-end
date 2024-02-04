import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import RankingList from '../components/RankingList';
import userIconPink from "../assets/icons/userIcon_pink.png";
import userIconGreen from "../assets/icons/userIcon_green.png";
import userIconBrown from "../assets/icons/userIcon_brown.png";
import RankingFilter from '../components/RankingFilter';
import { rankingData } from "../assets/data/rankingData";
import axios from 'axios';

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
    const [rankings, setRankings] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState("PYTHON");

    
     useEffect(() => {
        // Fetch data from the API
        axios
            .get('http://localhost:8080/api/scores/rank', {
                params: {
                    language: selectedLanguage.toLowerCase(), // 파이썬이나 C 같은 언어명이 소문자로 오는 경우를 고려
                },
            })
            .then((response) => {
                const rankData = response.data.data;
                setRankings(rankData);
            })
            .catch((error) => {
                console.error('Error fetching rank data: ', error);
            });
    }, [selectedLanguage]);

    console.log("selected language: ", selectedLanguage);
    console.log("ranking data: ", rankings);
    const sortedRanks = rankings.sort((a, b) => parseInt(b.cpm) - parseInt(a.cpm));
    
    const handleCategoryFilter = (language) => {
        setSelectedLanguage(language);
    }

    

    return (
        <PageContainer>
             <RankTitle>RANKING</RankTitle>
             <RankContent>
                <RankingFilter handleCategoryFilter={handleCategoryFilter}/>
                <RankWrapper>
                    <Subtitle>
                        <div>Rank</div>
                        <div>Name</div>
                        <div>Score</div>
                    </Subtitle>
                {sortedRanks
                    //   .filter(rank => !selectedLanguage || (rank.user && rank.user.language.toLowerCase() === selectedLanguage.toLowerCase()))
                      .slice(0, 4)
                     .map((rank, index) => (
                    <RankingList
                    key={index + 1}
                    rank={`${(index + 1)}${getOrdinalSuffix(index + 1)}`}
                    img={rank.image}
                    altText={rank.userId}
                    id={rank.loginId}
                    score={rank.cpm}
                    />
                ) )}
            </RankWrapper>
            </RankContent>
        </PageContainer>
    );
};

export default RankingPage;
