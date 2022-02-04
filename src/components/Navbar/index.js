import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItems
    , NavLinks, NavMenu, NavButton, NavButtonLink} from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>BCITY</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItems>
                        <NavLinks to="about" offset={-80}>About</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="discovery" offset={-80}>Discovery</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="services" offset={-80}>Services</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="signup" offset={-80}>Sign Up</NavLinks>
                    </NavItems>
                </NavMenu>
                <NavButton>
                    <NavButtonLink to="/signin">Sign In</NavButtonLink>
                </NavButton>
            </NavbarContainer>
        </Nav>
    </>
  );
};

export default Navbar;
