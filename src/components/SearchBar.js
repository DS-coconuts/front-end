import Form from 'react-bootstrap/Form';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const SearchContainer=styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-item: center;
`

const StyledButton = styled(Button)`
    position: absolute;
    top: 50%;
    right: 10px; /* 오른쪽 여백 설정 */
    transform: translateY(-50%);

    height: 40px; 
    width: 40px; 
    color: #132043;
    font-size: 16px; 
    border-radius: 50px; 
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
        background: #132043;
        color: #FFFFFF;
        transition: 0.5s;
      }
`;


const StyledForm = styled(Form)`
    width: 600px;
    height: 55px; 
    font-size: 19px; 
    border-radius: 25px;
    display: flex;
    align-items: center;
    position: relative;
    
    .form-control {
        height: 51px; 
        font-size: 19px; 
        border-radius: 25px;
        padding-right: 80px; 
        padding-left: 20px;
    }
`;


function SearchBar({ setSearchTerm }) {
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(searchValue);
        setSearchValue('');
    };

    return (
        <>
            <SearchContainer>
                <StyledForm onSubmit={handleSubmit}>
                    <Form.Control type="text"
                        placeholder="아이디 검색"size="lg" className="form-control" value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}/>
                        <StyledButton type="submit" variant="none"><FaSearch size={20} /></StyledButton>
                </StyledForm>
            </SearchContainer>
        </>
      );
}

export default SearchBar;
