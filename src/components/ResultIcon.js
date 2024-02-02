import React from "react";
import styled from "styled-components";

const IconButton = styled.button`
    margin: 0 auto;
    padding: 20px 0;
    width: 70px;
    height: 70px;
    font-size: 30px;
    color: #FFFFFF;
    background: #132043;
    border: none;
    cursor: pointer;
`;

const ButtonWithIcon = ({ icon: Icon, onClick }) => {
    return (
        <IconButton onClick={onClick}>
            <Icon />
        </IconButton>
    );
};

const ResultIcon = ({ icon }) => {
    return (
        <>
            <ButtonWithIcon icon={icon} />
        </>
    );
};

export default ResultIcon;
