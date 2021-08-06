import styled from 'styled-components'


export const DisplayOver = styled.div`
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2; 
    transition: background-color 350ms ease;
    background-color: transparent;
    padding: 30%;
    box-sizing: border-box;
`

export const Hover = styled.div`
    background-color: transparent;
    opacity: 0;
    transition: opacity 350ms ease;
`
export const ProjectH2 = styled.h2`
    transform: translate3d(0,50px,0);
    transition: transform 350ms ease;
    font-size: 1rem;
    margin-bottom: 10px
`

export const ProjectP = styled.div`
    transform: translate3d(0,50px,0);
    transition: transform 350ms ease;
    font-size: 1rem;
    text-align: center;
`



export const ProjectsContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F9F6F5;

    @media screen and (max-width: 768px) {
        height: 100vh;
    }
    @media screen and (max-width: 480px) {
        height: 150vh;
    }
`

export const ProjectsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 8px;
    margin-bottom: 32px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
    @media screen and (max-width: 560px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ProjectsCard = styled.div`
    color: #fff;
    ${'' /* position: relative;
    width: 300px;
    height: 30vh;
    cursor: pointer; */}
    position: relative;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 25vh;
    width: 320px;
    ${'' /* min-width: 250px; */}
    background: ${props => `url(${props.background}) no-repeat top center`};
    background-size: cover;
    overflow: hidden;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    
    &:hover ${DisplayOver} {
        background-color: rgba(0,0,0, .5);
    }
    &:hover ${ProjectH2} {
        transform: translate3d(0,0,0);
    }
    &:hover ${ProjectP} {
        transform: translate3d(0,0,0);
    }
    &:hover ${Hover} {
        opacity: 1;
    }

    @media screen and (max-width: 480px) {
        ${'' /* padding: 100%; */}
    }
`

export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    color: black;
    margin-bottom: 32px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }

`