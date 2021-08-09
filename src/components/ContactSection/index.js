import React from 'react'
import { Button } from '../ButtonElement'
import { ContactContainer, ContactWrapper, ContactH2, Img, ImgWrap, ContactP, BtnWrap } from './ContactElements'
import img from '../images/plane.png'
const Contact = () => {
    return (
        <>
        <ContactContainer id='contact'>
            <ContactWrapper>
                <ImgWrap>
                    <Img src={img} alt='plane'/>
                </ImgWrap>
                <ContactH2>Contact</ContactH2>
                <ContactP> Whether you have an idea for a project or just want to chat, feel free to shoot me an email! </ContactP>
                <BtnWrap>
                    <Button to='contact'>
                        Get in touch!
                    </Button>
                </BtnWrap>
            </ContactWrapper>
        </ContactContainer>        
        </>
    )
}

export default Contact
