import React from "react";
import styled from "styled-components"

const RankContainer = styled.div`
    width: 90%;
    height: 80px;
    padding: 20px 60px;
    margin: 20px auto;
    border-radius: 30px 0 30px 0;
    background-color: rgba( 31, 65, 114, 0.7 );
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    color: #FFFFFF;
`
const ProfileStyle = styled.img`
    width: auto;
    height: 100px;
    padding: 30px 0; 
`

const InfoStyle = styled.div`
    display: flex;
    align-item: center;
    color: #FFFFFF;
    font-size: 20px;
    margin: 0 auto;
`

const IdStyle = styled.div`
    text-align: center;
    padding: 35px 10px;
`

const ScoreStyle = styled.div`
    font-size: 24px;
    font-weight: bold;
`

const RankStyle = styled.div`
    font-size: 24px;
    color: #F1B4BB;
    font-weight: bold;
`

const RankingList = ({rank, img, altText, id, score}) => {
    

    return (
        <RankContainer>
            <RankStyle>{rank}</RankStyle>
            <InfoStyle>
                <ProfileStyle src={img} alt={altText} />
                <IdStyle>{id}</IdStyle> 
            </InfoStyle>
            <ScoreStyle>{score}</ScoreStyle>
           
        </RankContainer>
        
    )
}
export default RankingList;