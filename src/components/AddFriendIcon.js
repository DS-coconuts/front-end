import React from "react";
import styled from "styled-components"
import { LuUserPlus } from "react-icons/lu";
import FriendModal from '../components/FriendModal';

const IconButton = styled.button`
    width: 50px;
    height: 50px;
    font-size: 30px;
    color: #FFFFFF;
    background: #132043;
    border: none;
    cursor: pointer;
`


const AddFriendIcon = () => {
    const [modalShow, setModalShow] = React.useState(false);
    

    return (
        <>
         <IconButton onClick={() => setModalShow(true)}>
            <LuUserPlus />
        </IconButton>
        <FriendModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </>
           
    )
}

export default AddFriendIcon;