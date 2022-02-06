import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItems,
  NavLinks,
  NavMenu,
  NavButton,
  NavButtonLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrolling, setScrolling] = useState(false);
  const scrollHandler = () => {
    if (window.scrollY >= 80) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);
  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <Nav scrolling={scrolling}>
          <NavbarContainer>
            <NavLogo to="/">BCITY</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItems>
                <NavLinks to="about" offset={-80}>
                  About
                </NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks to="discovery" offset={-80}>
                  Discovery
                </NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks to="services" offset={-80}>
                  Services
                </NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks to="signup" offset={-80}>
                  Sign Up
                </NavLinks>
              </NavItems>
            </NavMenu>
            <NavButton>
              <NavButtonLink to="/signin">Sign In</NavButtonLink>
            </NavButton>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
