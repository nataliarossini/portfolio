import React, { useEffect, useState } from 'react';
import { VscMenu } from "react-icons/vsc"
import { NavContainer, Nav, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
    const[scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };
 
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavLogo onClick={toggleHome}>
                    NR
                </NavLogo>
                <NavContainer>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                                smooth={true} 
                                dutation={500} 
                                spy={true}
                                exact='true'
                                offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects"
                                smooth={true} 
                                dutation={500} 
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Projects</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to="blog">Blog</NavLinks>
                        </NavItem> */}
                        <NavItem>
                            <NavLinks to="contact"
                                smooth={true} 
                                dutation={500} 
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <MobileIcon onClick={toggle} >
                        <VscMenu />
                    </MobileIcon>
                </NavContainer>
            </Nav>
        </>
    );
};

export default Navbar;
