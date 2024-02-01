import React from 'react';
import styled from 'styled-components';
import FriendList from '../components/FriendList';
import userIconPink from "../assets/icons/userIcon_pink.png";
import userIconGreen from "../assets/icons/userIcon_green.png";
import userIconBrown from "../assets/icons/userIcon_brown.png";
import AddFriendIcon from "../components/AddFriendIcon";

const PageContainer = styled.div`
    height: 800px;
    padding: 150px 500px;
    background: #132043;
    margin: 0 auto;
`;

const Title=styled.div`
    font-size: 39px;
    color: #F1B4BB;
    justify-content: space-between;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 0 100px;
` 



const FriendListPage = () => {
    
    return (
        <PageContainer>
            <TitleContainer>
                <Title>팔로우 목록</Title>
                <AddFriendIcon/>
            </TitleContainer>
            
            <FriendList 
                img={userIconPink} 
                altText={'user1Icon'} 
                id={'코너톤파이팅'}
                text={'아자아자아자아자아자'}
                buttonText={'방문하기'}
            />
            
            <FriendList 
                img={userIconGreen} 
                altText={'user2Icon'} 
                id={'dkfjikn'}
                text={'hi hi hi hi hi'}
                buttonText={'방문하기'}
            />
            <FriendList 
                img={userIconBrown} 
                altText={'user3Icon'} 
                id={'짱짱'}
                text={'친구 추가 환영^^'}
                buttonText={'방문하기'}
            />
            
        </PageContainer>
    );
};

export default FriendListPage;
