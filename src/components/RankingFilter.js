import React, { useState } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
    margin: 0 0 50px 0;
    width: 300px;
    height: 550px;
    padding: 100px 0;
    background-color: rgba( 255, 255, 255, 0.3 );
    border-radius: 0 150px 30px 30px;
    text-align: center;
    font-family:'DNFBitBitv2';
`

const FilterButton = styled.button`
    background-color: rgba( 255, 255, 255, 0 );
    width: 230px;
    height: 50px;
    margin: 17px auto;
    color: #FFFFFF;
    font-size: 22px;
    
    border: none;
    &:hover {
        color: #132043;
        transition: 0.5s;
      }

    &.active {
        color: #F1B4BB;
    }
`

const RankingFilter = ({handleCategoryFilter}) => {
    let button = ["PYTHON", "C", "JAVA", "HTML", "JAVASCRIPT"];
    const [btnActive, setBtnActive] = useState("");
    
    const toggleActive = (e) => {
        // const category = e.target.value === "0" ? "" : button[e.target.value];
        setBtnActive(e.target.value);
        // handleCategoryFilter(category);
    }

    return (
        <FilterContainer>
            {button.map((item, idx) => (
                 <FilterButton
                    key={idx}
                    value={idx}
                    className={`btn${idx == btnActive ? " active" : ""}`}
                     onClick={toggleActive}
                 >{item}</FilterButton>
            ))}
        </FilterContainer>
    );
}

export default RankingFilter;