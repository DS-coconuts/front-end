import React from "react";
import styled from "styled-components"
import FriendButton from "./FriendButton";

const FriendContainer = styled.div`
    width: 80%;
    height: 150px;
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
    height: 120px;
    margin-top: 5px;
    padding: 20px;
`

const InfoStyle = styled.div`
    color: #FFFFFF;
    font-size: 20px;
    margin-right: auto;
    text-align: left;
    padding: 15px;
`

const IdStyle = styled.div`
    font-size: 28px;
    margin: 0 0 7px 0;
`
const FriendList = ({img, altText, id, text, buttonText}) => {
    
    return (
        <FriendContainer>
            <ProfileStyle src={img} alt={altText} />
            <InfoStyle>
                <IdStyle>{id}</IdStyle> 
                <div>{text}</div>
            </InfoStyle>
            <FriendButton 
                text={buttonText}
                onclick={()=>{}}
            />
        </FriendContainer>
        
    )
}
export default FriendList;