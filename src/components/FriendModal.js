import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import SearchBar from './SearchBar';
import FriendList from '../components/FriendList';
import userIconPink from "../assets/icons/userIcon_pink.png";
import userIconBrown from "../assets/icons/userIcon_green.png";
import userIconGreen from "../assets/icons/userIcon_brown.png";
import { addFriendData } from '../assets/data/addFriendData';

const ModalContainer = styled(Modal)`
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    font-family:'NanumSquareNeo'; 
`   

const ModalHeader = styled(Modal.Header)`
    background: #424D68;
    justify-content: center;
    padding: 30px;
`

const ModalTitle = styled(Modal.Title)`
    margin: 0 auto;
    width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ModalBody = styled(Modal.Body)`
     background: #424D68;
`


const FriendContainer = styled.div`
    max-height: 500px;
    overflow-y: auto;  /* 스크롤 기능 활성화 */
    scrollbar-width: thin; /* Firefox */
    scrollbar-color:  transparent transparent; /* Firefox */
    &::-webkit-scrollbar {
        background-color: transparent /* 투명도 설정 */
        border-radius: 10px; /* 선택적으로 테두리 반경 설정 */
        width: 5px; /* 스크롤바 너비 */
        height: 3px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: transparent; /* 스크롤바 색상 */
        border-radius: 10px;
    }
`


function FriendModal(props) {
    const [friends, setFriends] = useState(addFriendData.results);
    return (
        <ModalContainer
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
            
          <ModalHeader closeButton>
            <ModalTitle id="contained-modal-title-vcenter">
              <SearchBar />
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
          <FriendContainer>
          {friends.map((friend) => (
                    <FriendList
                    key={friend.key}
                    img={friend.img} 
                    altText={friend.altText} 
                    id={friend.id}
                    text={friend.text}
                    buttonText={'친구추가'}
                    />
                ) )}
            </FriendContainer>
          </ModalBody>
      </ModalContainer>
    );
  }

  export default FriendModal;
