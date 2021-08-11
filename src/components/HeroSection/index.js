import React, { useState } from 'react'
import { HeroContainer, HeroBg, HeroBg2, HeroContent, HeroBtnWrapper, HeroImg, MblImg } from './HeroElements';
import { Button } from '../ButtonElement';
import Img from '../images/image.jpg'
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='hero'>
            <HeroBg>
                <Fade delay={1400} direction={'up'} duration={800} triggerOnce>
                <HeroContent>
                    <h1>
                        Hello, I'm Natalia
                    </h1>
                    <p>
                        I'm a full stack developer
                    </p>
                    <HeroBtnWrapper>
                        <Button 
                            to='contact' 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}
                            smooth={true} 
                            dutation={500} 
                            spy={true}
                            exact='true'
                            offset={-80}
                        >
                         Say Hello
                        </Button>
                    </HeroBtnWrapper>
                    <MblImg src={Img} />
                </HeroContent>
                </Fade>
            </HeroBg>
            <HeroBg2>
                <Fade direction={'down'} delay={1500} duration={1000} triggerOnce>
                    <HeroImg src={Img} />
                </Fade>
            </HeroBg2>
        </HeroContainer>
    )
}

export default HeroSection;
