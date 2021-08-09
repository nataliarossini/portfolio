import React, { useState } from 'react'
import { HeroContainer, HeroBg, HeroBg2, HeroContent, HeroBtnWrapper, HeroImg, MblImg } from './HeroElements';
import { Button } from '../ButtonElement';
import Img from '../images/image.jpg'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='hero'>
            <HeroBg>
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
                         { hover ? 'say hello 👋' : 'say hello' }
                        </Button>
                    </HeroBtnWrapper>
                    <MblImg src={Img} />
                </HeroContent>
            </HeroBg>
            <HeroBg2>
                <HeroImg src={Img} />
            </HeroBg2>
        </HeroContainer>
    )
}

export default HeroSection;
