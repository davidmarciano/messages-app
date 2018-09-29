import React from 'react';
import styled from 'styled-components';
import MessagesBox from './components/MessagesBox';

const Wrapper = styled.div`
    width:100%;
    height:auto;
    padding:20px;
    background-color:#ffffff;
`;
const FilterInput = styled.input`
    width:100%;
    height:35px;
    padding:10px;
    margin-bottom:5px; 
`;

const MessagesSection = (props) => {
    const {filteredItems, filterValue, onFilterChange} = props;
    return (
        <Wrapper>
            <FilterInput type={'text'} placeholder={'Filter'} onChange={onFilterChange} value={filterValue} />
            <MessagesBox items={filteredItems} />
        </Wrapper>
    );    
}

export default MessagesSection;