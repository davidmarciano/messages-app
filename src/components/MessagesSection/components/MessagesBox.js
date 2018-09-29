import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`;
const MessageRow = styled.div`
    width:100%;
    height:45px;
    margin:15px 0px 0px 0px;
    display:flex;
`;
const LeftBox = styled.div`
    width:45px;
    height:100%;
    margin-right:10px;
`;
const AvatarImage = styled.img`
    width:100%;
    height:100%;
    border-radius:5px;
`;
const RightBox = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    font-size:14px;
`;
const Email = styled.div`
    width:100%;
    color:#505050;
    font-weight:bold;    
`;
const Message = styled.div`
    width:100%;
    color:#929292;
`;
const NoData = styled.div`
    width:100%;
    height:100%;
    font-size:14px;
    font-weight:bold;
    color:#929292;
    margin-top:15px;
`;

const MessagesBox = ({items}) => {
    return (
        <Wrapper>
            {
                items && items.length > 0 ?
                items.map((item,index) => {
                    return (
                        <MessageRow key={index}>
                            <LeftBox> <AvatarImage src={item.gravatar} /> </LeftBox>
                            <RightBox>
                                <Email>{item.email}</Email>
                                <Message>{item.message}</Message>
                            </RightBox>
                        </MessageRow>  
                    )
                })
                :
                <NoData>No data available, please insert an email and message</NoData>
            }                      
        </Wrapper>        
    )    
}

export default MessagesBox;