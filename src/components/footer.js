import React from 'react'
import styled from 'styled-components';

const FootDiv = styled.div`
   
    .name{
        color: #98f;
        margin-left: 10px
    }
	
`


const Footer = ()=>{
    return (
        <FootDiv className='footer'>
            &copy; {new Date().getFullYear()}
            <span className='name'>Developed by Smart Egbuchulem</span>
        </FootDiv>
    )
}

export default Footer

