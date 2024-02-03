import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
    margin: 0 0 50px 0;
    width: 300px;
    height: 550px;
    padding: 100px 0;
    background-color: rgba( 255, 255, 255, 0.3 );
    border-radius: 0 150px 30px 30px;
    text-align: center;
    font-family:'bitbit';
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
    
    useEffect(() => {
        setBtnActive("PYTHON");
        handleCategoryFilter("PYTHON");
    }, []);

    const toggleActive = (language) => {
        setBtnActive(language);
        handleCategoryFilter(language);
    }


    return (
        <FilterContainer>
            {button.map((item, idx) => (
                <FilterButton
                key={idx}
                className={`btn${item === btnActive ? " active" : ""}`}
                onClick={() => toggleActive(item)}
            >{item}</FilterButton>
            ))}
        </FilterContainer>
    );
}

export default RankingFilter;