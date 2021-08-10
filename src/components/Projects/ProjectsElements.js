import styled from 'styled-components'
import { BsPlusCircle } from "react-icons/bs";

export const DisplayOver = styled.div`
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2; 
    transition: background-color 350ms ease;
    background-color: transparent;
    padding: 1.5rem;
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
    font-size: 1.5rem;
    margin-bottom: 1rem;
    border-bottom: 0.5px solid white;
`

export const ProjectP = styled.div`
    font-weight: bolder;
    letter-spacing: .04rem;
    transform: translate3d(0,50px,0);
    transition: transform 350ms ease;
    font-size: 1rem;
`

export const SeeProject = styled.div`
    color: white;
    display: flex;
    position: absolute;
    bottom: 2rem;;
    align-items: center;
    transform: translate3d(0,50px,0);
    transition: transform 350ms ease;
    p{
        margin-left: 8px;
        transition: 0.4s;
        &:hover{
            color: #e1a681;
        }
    }
`

export const PlusCircle = styled(BsPlusCircle)`
    color: #e1a681;
    margin-left: 8px;
`

export const ProjectsContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #F9F6F5;
    padding: 0 24px;
    overflow: hidden;
    font-family: 'Work Sans', sans-serif;
    

    @media screen and (max-width: 768px) {
        height: 100vh;
    }
    @media screen and (max-width: 480px) {
        height: 150vh;
    }
`

export const ProjectsWrapper = styled.div`
    ${'' /* max-width: 1000px; */}
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 8px;
    margin-bottom: 32px;
    margin-top: 32px;
    

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
    @media screen and (max-width: 560px) {
        grid-template-columns: 1fr;
        ${'' /* padding: 0 20px; */}
    }
`

export const ProjectsCard = styled.div`
    color: #fff;
    position: relative;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 35vh;
    width: 420px;
    background: ${props => `url(${props.background}) no-repeat top center`};
    background-size: cover;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    filter:  grayscale(1);
    ${'' /* -webkit-filter: grayscale(0.8); */}
    -webkit-transition: all .8s ease-in-out;

    &:hover {
        filter: none;
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    
    &:hover ${DisplayOver} {
        background-color: rgba(0,0,0, .6);
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
    &:hover ${SeeProject} {
        transform: translate3d(0,0,0);
    }

    @media screen and (max-width: 1200px) {
        height: 25vh;
        width: 320px;
    }

    @media screen and (max-width: 480px) {
        ${'' /* padding: 100%; */}
        ${'' /* width: 300px; */}
    }

    @media screen and (max-width: 320px) {
        width: 200px;
    }
`

export const ProjectsH1 = styled.h1`
    font-family: 'Work Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: .2rem;
    margin-bottom: 48px;
    margin-top: 8%;
    font-weight: 400;
    font-size: 32px;
    line-height: 1.1;
    color: rgba(0, 0, 0, 0.6);
    ${'' /* align-self: flex-start;
    padding: 0 15px; */}
    @media screen and (max-width: 768px) {
        margin-bottom: 24px;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

`
