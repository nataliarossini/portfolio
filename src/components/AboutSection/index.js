import React from 'react'
import { ButtonHref } from '../ButtonHrefElement';
import { Column2, Img, ImgWrap, AboutContainer, AboutRow, AboutWrapper, Column1, TextWrapper, Heading, Icons, Icon, BtnWrap } from './AboutElements'
import { Fade, Slide } from "react-awesome-reveal";

const AboutSection = ({id, imgStart, headline, description, subTitle, buttonLabel, img, alt, icons, resume}) => {
    return (
        <>
            <AboutContainer id={id} >
               <AboutWrapper>
                   <AboutRow imgStart={imgStart}>
                       <Column1>
                        <Fade delay={900} cascade={true} triggerOnce>
                               <Heading>
                                {headline}
                               </Heading>
                           <TextWrapper>
                           <Fade delay={1000} cascade={true} triggerOnce>
                               <p>{description}</p>
                               <h3>{subTitle}</h3>
                               <Icons>
                               {icons.map(icon => {
                                    return (
                                        <Icon key={Math.random()} src={icon} alt='icons' />
                                    )
                               })}  
                               </Icons>
                               <BtnWrap>
                                 <ButtonHref href={resume} target='_blank'>
                                    {buttonLabel}
                                 </ButtonHref>
                               </BtnWrap>
                               </Fade>
                           </TextWrapper>
                       </Fade>
                       </Column1>
                       <Column2>
                            <Slide direction={"up"} duration={1000} triggerOnce>
                                <ImgWrap>
                                    <Img src={img} alt={alt}/>
                                </ImgWrap>
                            </Slide>
                       </Column2>
                   </AboutRow>
               </AboutWrapper> 
            </AboutContainer>
        </>
    )
}

export default AboutSection
