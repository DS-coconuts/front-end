import React from "react";
import styled from "styled-components"
import FriendButton from "./FriendButton";

import { Link } from 'react-router-dom';

const FriendContainer = styled.div`
    width: 80%;
    height: 130px;
    padding: 0 20px;
    margin: 20px auto;
    border-radius: 30px;
    background-color: rgba( 31, 65, 114, 0.7 );
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ProfileStyle = styled.img`
    width: auto;
    height: 110px;
    padding: 20px;
`

const InfoStyle = styled.div`
    color: #FFFFFF;
    font-size: 18px;
    margin-right: auto;
    text-align: left;
    padding: 15px;
`

const IdStyle = styled.div`
    font-size: 24px;
    margin: 0 0 7px 0;
`
const FriendList = ({img, altText, id, text, buttonText, linkTo, onAddFriend  }) => {
    const handleButtonClick = () => {
        if (buttonText === "방문하기") {
          // "방문하기" 버튼 클릭 시 이동
          window.location.href = linkTo;
        } else if (buttonText === "친구추가" && onAddFriend) {
          // "친구추가" 버튼 클릭 시 onAddFriend 함수 호출
          onAddFriend();
        }
      };
    return (
        <FriendContainer>
            <ProfileStyle src={img} alt={altText} />
            <InfoStyle>
                <IdStyle>{id}</IdStyle> 
                <div>{text}</div>
            </InfoStyle>
            <FriendButton 
                text={buttonText}
                onClick={buttonText === "방문하기" ? handleButtonClick : onAddFriend}
     />
        </FriendContainer>
        
    )
}
export default FriendList;