import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import SearchBar from './SearchBar';
import FriendList from '../components/FriendList';
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
    const [searchTerm, setSearchTerm] = useState('');

    //검색창
    const handleSearch = (term) => {
      setSearchTerm(term.toLowerCase()); // 검색어 업데이트
  };
    
  // 검색어와 선택된 카테고리에 따라 데이터 필터링하는 함수
  const searchedFriend = friends.filter(friend => {
    const matchesSearch = !searchTerm || friend.id.toLowerCase().includes(searchTerm);

    return matchesSearch;
});

    return (
        <ModalContainer
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
            
          <ModalHeader closeButton>
            <ModalTitle id="contained-modal-title-vcenter">
              <SearchBar setSearchTerm={handleSearch}/>
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
          <FriendContainer>
          {searchedFriend.map((friend) => (
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
