import React,{useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import SearchBar from './SearchBar';
import FriendList from '../components/FriendList';
import { addFriendData } from '../assets/data/addFriendData';
import axios from 'axios';


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

const FriendModal = (props) => {
  const [friends, setFriends] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const storedUserId = localStorage.getItem("userId"); // 로컬 스토리지에서 userId 가져오기
  
  // 친구를 검색하는 API 호출
  const searchUsers = (searchTerm) => {
    console.log('userId:', storedUserId);
  console.log('searchTerm:', searchTerm);

    axios
      .get('http://localhost:8080/api/users/search', {
        params: {
          q: searchTerm,
        userId: storedUserId,
       }
      })
      .then((response) => {
        const searchData = response.data.data;
        setFriends(searchData);
      })
      .catch((error) => {
        console.error('Error searching users: ', error);
        
        if (error.response) {
          console.error('Server responded with non-2xx status', error.response.status, error.response.data);
        } else if (error.request) {
          console.error('No response received', error.request);
        } else {
          console.error('Error during request setup', error.message);
        }

      });
  };

   //검색창
   const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase()); // 검색어 업데이트
    // 검색어가 변경될 때마다 API 호출
    searchUsers(term.toLowerCase());
  };
    
  // 검색어와 선택된 카테고리에 따라 데이터 필터링하는 함수
//   const searchedFriend = friends.filter(friend => {
//     const matchesSearch = !searchTerm || friend.id.toLowerCase().includes(searchTerm);

//     return matchesSearch;
// });

  const handleAddFriend = (friendId) => {
  // 여기서 friendId를 이용하여 친구를 추가하는 로직을 수행하면 됩니다.
    console.log(`친구 추가: ${friendId}`);
  };

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
          {friends.map((friend) => (
                    <FriendList
                    key={friend.userId}
                    img={friend.image || ''}  
                    altText={friend.loginId} 
                    id={friend.loginId}
                    text={friend.introduction || ''}
                    buttonText={'친구추가'}
                    goalCpm={friend.goalCpm}
                    onAddFriend={() => handleAddFriend(friend.userId)}
                    />
                ) )}
            </FriendContainer>
          </ModalBody>
      </ModalContainer>
    );
  }

  export default FriendModal;
