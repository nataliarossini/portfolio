import React from 'react'
import { HeroContainer, HeroBg, HeroBg2, HeroContent, HeroBtnWrapper, HeroImg, MblImg } from './HeroElements';
import { Button } from '../ButtonElement';
import Img from '../images/image.jpg'

const HeroSection = () => {
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
                        <Button to='contact'>
                            say hello
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
