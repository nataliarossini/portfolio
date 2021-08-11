import styled, { keyframes } from "styled-components";

export const animationHero1 = keyframes`
    from {top: -100%;}
    to {bottom: 100%;}
`
export const animationHero2 = keyframes`
    from {top: 100%;}
    to {bottom: 0%;}
`

export const HeroContainer = styled.div`
    ${'' /* background: #F3EDEC; */}
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

`

export const HeroBg = styled.div`
    background: #F9F6F5;
    position: absolute;
    top: 0;
    ${'' /* right: 0; */}
    bottom: 0;
    left: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;
    animation-name: ${animationHero1};
    animation-duration: 1.5s;
    ${'' /* animation-iteration-count: infinite; */}
    @media screen and (max-width: 750px) {
        width: 100%;
    }
`

export const HeroBg2 = styled.div`
    background: #F3EDEC;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    ${'' /* left: 0; */}
    width: 50%;
    height: 100%;
    overflow: hidden;
    animation-name: ${animationHero2};
    animation-duration: 1.5s;
    @media screen and (max-width: 750px) {
        display: none;
    }
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 100%;
    top: 40vh;
    position: relative;
    padding: 0px 24px;
    display: flex;
    flex-direction: column;
    align-items: right;
    font-family: 'Prata', serif;

    h1 {
        color: rgba(0, 0, 0, 0.7);
        font-size: 3.5rem;
        text-align: right;
        font-weight: lighter;
        letter-spacing: .1rem;

        ${'' /* @media screen and (max-width: 768px) {
            font-size: 3rem;
        } */}

        @media screen and (max-width: 768px) {
            ${'' /* font-size: 4rem; */}
            text-align: center;
            font-size: 3rem;
        }
    }

    p {
        margin-top: 24px;
        color: rgba(0, 0, 0, 0.7);
        font-size: 24px;
        text-align: right;
        max-width: 600;

        @media screen and (max-width: 768px) {
            font-size: 1.5rem;
            text-align: center;
        }

        @media screen and (max-width: 750px) {
            margin-bottom: 4rem;
        }
    }
    @media screen and (max-width: 690px) {
        top: 20vh;
    }
`
export const HeroBtnWrapper = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
    @media screen and (max-width: 750px) {
        display: none;
    }
`

export const HeroImg = styled.img`
    max-width: 22rem;
    position: relative;
    top: 35vh;
    padding: 0px 24px;
    opacity: 90%;
    
    ${'' /* @media screen and (max-width: 768px) {
        display: none;
    } */}
    
`

export const MblImg = styled.img`
    display: none;
    
    @media screen and (max-width: 750px) {
        display: flex;
        max-width: 18em;
        align-self: center;
        position: relative;
        padding: 0px 24px;
        opacity: 90%;
        bottom: 2rem;
    }
    @media screen and (max-width: 360px) {
        max-width: 16em;
    }
    @media screen and (max-width: 320px) {
        display: none;
    }
    
`
