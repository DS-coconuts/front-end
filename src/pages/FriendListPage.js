import React,{useState} from 'react';
import styled from 'styled-components';
import FriendList from '../components/FriendList';
import AddFriendIcon from "../components/AddFriendIcon";
import { friendData } from '../assets/data/friendData';

const PageContainer = styled.div`
    height: 800px;
    padding: 150px 500px;
    background: #132043;
    margin: 0 auto;
    font-family:'NanumSquareNeo'; 

    @media (max-width: 1500px) {
        padding: 150px 100px; /* 작은 화면일 때 패딩값 변경 */
    }
`;

const FriendContainer = styled.div`
    max-height: 500px;
    overflow-y: auto;  /* 스크롤 기능 활성화 */
    scrollbar-width: thin; /* Firefox */
    scrollbar-color:  transparent transparent; /* Firefox */
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
`

const Title=styled.div`
    font-size: 35px;
    font-family:'bitbit';
    color: #F1B4BB;
    justify-content: center;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 0 100px;
` 



const FriendListPage = () => {
    const [friends, setFriends] = useState(friendData.results);
    console.log('Friend data:', friends);
    return (
        <PageContainer>
            <TitleContainer>
                <Title>팔로우 목록</Title>
                <AddFriendIcon/>
            </TitleContainer>
            <FriendContainer>
                {friends.map((friend) => (
                    <FriendList
                    key={friend.key}
                    img={friend.img} 
                    altText={friend.altText} 
                    id={friend.id}
                    text={friend.text}
                    buttonText={'방문하기'}
                    />
                ) )}
            </FriendContainer>
        </PageContainer>
    );
};

export default FriendListPage;
