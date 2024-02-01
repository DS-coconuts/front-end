import React from "react";
import styled from "styled-components"

const ButtonStyle = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 20px;
    margin: 0 15px;
    padding: 8px 20px;
    font-size: 20px;
    font-weight: bold;
    color: #F1B4BB;
    background-color: rgba( 255, 255, 255, 0.2 );
    width: 130px;
    height: 50px;
`;

const FriendButton = ({text, onClick}) => {
    return <ButtonStyle onclick={onClick}>{text}</ButtonStyle>
};
export default FriendButton;