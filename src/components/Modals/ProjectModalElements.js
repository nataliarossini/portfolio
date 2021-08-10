import styled from "styled-components";
import { VscClose } from "react-icons/vsc"
import { FiExternalLink, FiGithub } from "react-icons/fi";

export const ModalWrap = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`

export const ModalContainer = styled.div`
    position: fixed;
    top: 24px;
    margin: auto;
    width: 800px;
    ${'' /* min-height: 800px; */}
    z-index: 100;
    overflow: hidden;
    background: white;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.26);
    font-family: 'Prata', serif;
    font-family: 'Major Mono Display', monospace;
    ${'' /* font-family: 'Work Sans', sans-serif; */}

    @media screen and (max-width: 800px) {
        width: 90%;
    }
    
`

export const ModalImg = styled.img`
    width: 100%;
`

export const Header = styled.div`
    background: #fff;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    ${'' /* position:fixed; */}
    
    h2{
        margin: 0;
        color: rgba(0, 0, 0, 0.6);
    }
`
export const Content = styled.div`
     padding: 1rem;
     p {
         margin: 1rem;
         text-align: center;
         font-family: 'Work Sans', sans-serif;
     }
`
export const CloseIcon = styled(VscClose)`
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    font-size: 24px;
`
export const ExternalLink = styled(FiExternalLink)`
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    font-size: 24px;
    transition: 0.2s;
    &:hover{
        color: #e1a681;
    }
`
export const SourceCode = styled(FiGithub)`
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    font-size: 24px;
    transition: 0.2s;
    &:hover{
        color: #e1a681;
    }
`

export const ModalLinks = styled.span`
    display: flex;
    justify-content: center;
    a{
        margin: 8px;
    }
`