import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width:100%;
    height:200px;
    padding:20px;
    background-color:#efefef;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
`;
const EmailInput = styled.input`
    width:100%;
    height:35px;
    padding:10px;
    margin-bottom:15px;
`;
const MessageInput = styled.textarea`
    width:100%;
    height:60px;
    padding:10px;
    margin-bottom:15px;
    resize:none;
`;
const SubmitButton = styled.button`
    width:70px;
    height:30px;
    font-size:11px;
    font-weight:bold;
    text-transform:uppercase;
    color:#ffffff;
    background-color:#46a9dd;
    border:0px;
    border-radius:3px;    
    cursor:pointer;
`;

const FormSection = (props) => {
    const {emailValue,messageValue,onEmailChange,onMessageChange,onSubmit} = props;
    return (
        <Wrapper>
            <EmailInput type={'email'} placeholder={'Email'} onChange={onEmailChange} value={emailValue} maxLength={30} />
            <MessageInput placeholder={'Message'} onChange={onMessageChange} value={messageValue} maxLength={40} />
            <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
        </Wrapper>
    );
}

export default FormSection;