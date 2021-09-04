import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FooterContainer, FooterWrapper, SocialIconLink, SocialIcons, PageRights } from './FooterElements'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <SocialIcons>
                        <SocialIconLink href="https://github.com/nataliarossini" target="_blank" aria-label="Github">
                            <FaGithub />
                        </SocialIconLink>
                        <SocialIconLink href="https://www.linkedin.com/in/nataliarossini/" target="_blank" aria-label="Linkedin">
                            <FaLinkedinIn />
                        </SocialIconLink>
                        <SocialIconLink href="https://www.instagram.com/rossininatalia/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="https://www.linkedin.com/in/nataliarossini/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                    </SocialIcons>
                </FooterWrapper>
                    <PageRights>© Natalia Rossini { new Date().getFullYear()}</PageRights>
            </FooterContainer>
        </>
    )
}

export default Footer
