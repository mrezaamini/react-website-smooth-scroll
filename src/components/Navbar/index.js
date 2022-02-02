import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItems
    , NavLinks, NavMenu, NavButton, NavButtonLink} from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>dollar</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItems>
                        <NavLinks to="about">About</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="discovery">Discovery</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="signup">Sign Up</NavLinks>
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
