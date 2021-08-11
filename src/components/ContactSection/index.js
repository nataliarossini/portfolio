import React from 'react'
import { ContactContainer, ContactWrapper, ContactH2, Img, ImgWrap, ContactP, BtnWrap } from './ContactElements'
import img from '../images/plane.png'
import { Fade, Zoom } from "react-awesome-reveal";
import { ButtonHref } from '../ButtonHrefElement';

const Contact = () => {
    return (
        <>
        <ContactContainer id='contact'>
            <ContactWrapper>
                <Fade cascade={true} triggerOnce>
                    <ImgWrap>
                        <Zoom>
                            <Img src={img} alt='plane'/>
                        </Zoom>
                    </ImgWrap>
                    <ContactH2>Contact</ContactH2>
                    <ContactP> Whether you have an idea for a project or just want to chat, feel free to shoot me an email! </ContactP>
                    <BtnWrap>
                        <ButtonHref href="mailto:nataliarossini3@gmail.com">
                            Let's talk
                        </ButtonHref>
                    </BtnWrap>
                </Fade>       
            </ContactWrapper>
        </ContactContainer> 
        </>
    )
}

export default Contact
