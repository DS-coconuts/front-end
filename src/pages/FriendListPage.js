import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import FriendList from '../components/FriendList';
import AddFriendIcon from "../components/AddFriendIcon";
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


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
    // const navigate = useNavigate();
    const storedUserId = localStorage.getItem("userId");
    const [friends, setFriends] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/api/friends?userId=${storedUserId}`);
            const friendListData = response.data.data;
            setFriends(friendListData);
          } catch (error) {
            console.error('Error fetching friend list data: ', error);
          }
        };
    
        if (storedUserId) {
          fetchData();
        }
      }, [storedUserId]);

  

    return (
        <PageContainer>
            <TitleContainer>
                <Title>팔로우 목록</Title>
                <AddFriendIcon/>
            </TitleContainer>
            <FriendContainer>
                {friends.map((friend) => (
                    <FriendList
                    key={friend.friendId}
                    img={friend.toUserImage} 
                    altText={friend.toUserLoginId} 
                    id={friend.toUserLoginId}
                    text={friend.toUserIntroduction}
                    buttonText={'방문하기'}
                    linkTo={`/my/${friend.toUserId}`}
                     />
                ) )}
            </FriendContainer>
        </PageContainer>
    );
};

export default FriendListPage;
