import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll'; 

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#fff' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    ${'' /* position: ${({sticky}) => (sticky ? "sticky" : "relative")}; */}
    ${'' /* transform: ${({sticky}) => (sticky ? "translateY(100%)" : "translateY(0)")}; */}
    ${'' /* transition: transform 400ms ease-in; */}
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`
export const NavLogo = styled.div`
    color: rgba(0, 0, 0, 0.8);
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: 'Major Mono Display', monospace;
    letter-spacing: -4px;
    ${'' /* display: none; */}
    ${'' /* position: absolute; */}
    ${'' /* top: 2rem; */}
    left: 0px;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        align-self: right;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.6);
    }
`  
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    ${'' /* margin-right: -22px; */}
    font-family: 'Work Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: .2rem;
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavItem = styled.li`
    height: 80px;
`
export const NavLinks = styled(LinkS)`
    color: rgba(0, 0, 0, 0.8);
    font-weight: normal;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 3rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
    }

    &.active {
        border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    }
`