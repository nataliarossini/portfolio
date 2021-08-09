import styled from "styled-components";
import { Link as LinkS} from 'react-scroll'
import { VscClose } from "react-icons/vsc"

export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #F3EDEC;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    font-family: 'Work Sans', sans-serif;
    text-transform: uppercase;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(VscClose)`
    color: rgba(0, 0, 0, 0.6);
`
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const SideBarWrapper = styled.div`
    color: rgba(0, 0, 0, 0.6);
`
export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 8rem);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 8rem);
    }
`

export const SideBarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);;
    cursor: pointer;

    &:hover {
        color: rgba(0, 0, 0, 1);
        transition: 0.2s ease-in-out;
    }
`