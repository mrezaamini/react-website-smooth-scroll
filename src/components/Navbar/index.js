import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { IconContext } from "react-icons/lib";
import { FaBars } from "react-icons/fa";

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

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <Nav scrolling={scrolling}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              BCITY
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItems>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks
                  to="discovery"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Discovery
                </NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
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
