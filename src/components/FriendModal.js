import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import SearchBar from './SearchBar';
import FriendList from '../components/FriendList';
import userIconPink from "../assets/icons/userIcon_pink.png";
import userIconBrown from "../assets/icons/userIcon_green.png";
import userIconGreen from "../assets/icons/userIcon_brown.png";

const ModalContainer = styled(Modal)`
    display: flex;
    justify-content: center;
    text-align: center;
`   

const ModalHeader = styled(Modal.Header)`
    background: #424D68;
    justify-content: center;
    padding: 30px;
`

const ModalTitle = styled(Modal.Title)`
    margin: 0 auto;
    padding: 0 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ModalBody = styled(Modal.Body)`
    background: #424D68;
`

function FriendModal(props) {
    return (
        <ModalContainer
          {...props}
          size="xl"
          centered
        >
           
          <ModalHeader closeButton>
            <ModalTitle id="contained-modal-title-vcenter">
              <SearchBar />
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            <FriendList 
                img={userIconPink} 
                altText={'user1Icon'} 
                id={'qwer'}
                text={'아자아자아자아자아자'}
                buttonText={'친구추가'}
            />
            <FriendList 
                img={userIconGreen} 
                altText={'user1Icon'} 
                id={'qasf'}
                text={'아자아자아자아자아자'}
                buttonText={'친구추가'}
            />
            <FriendList 
                img={userIconBrown} 
                altText={'user1Icon'} 
                id={'gsdgfsdg'}
                text={'아자아자아자아자아자'}
                buttonText={'친구추가'}
            />
          </ModalBody>
        
      </ModalContainer>
    );
  }

  export default FriendModal;
