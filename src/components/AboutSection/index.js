import React from 'react'
import { Button } from '../ButtonElement'
import { Column2, Img, ImgWrap, AboutContainer, AboutRow, AboutWrapper, Column1, TextWrapper, Heading, Icons, BtnWrap } from './AboutElements'

const AboutSection = ({id, imgStart, headline, description, subTitle, buttonLabel, img, alt, primary}) => {
    return (
        <>
            <AboutContainer id={id} >
               <AboutWrapper>
                   <AboutRow imgStart={imgStart}>
                       <Column1>
                           <TextWrapper>
                               <Heading>
                                {headline}
                               </Heading>
                               <p>{description}</p>
                               <h3>{subTitle}</h3>
                               <Icons>
                                    
                               </Icons>
                               <BtnWrap>
                                 <Button to='contact'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                 >
                                    {buttonLabel}
                                 </Button>
                               </BtnWrap>
                           </TextWrapper>
                       </Column1>
                       <Column2>
                           <ImgWrap>
                               <Img src={img} alt={alt}/>
                           </ImgWrap>
                       </Column2>
                   </AboutRow>
               </AboutWrapper> 
            </AboutContainer>
        </>
    )
}

export default AboutSection
