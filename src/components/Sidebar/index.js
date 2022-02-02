import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarButton, SidebarWrapper, SidebarButtonRoute,SidebarMenu,SidebarLink } from './SidebarElements';
const Sidebar = ({isOpen, toggle}) => {
  return(
      <SidebarContainer isOpen ={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon/>
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                  <SidebarLink to="discovery" onClick={toggle}>discovery</SidebarLink>
                  <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                  <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
              </SidebarMenu>
              <SidebarButton>
                  <SidebarButtonRoute to="/signin">Sign In</SidebarButtonRoute>
              </SidebarButton>
          </SidebarWrapper>
      </SidebarContainer>
  )
};

export default Sidebar;
