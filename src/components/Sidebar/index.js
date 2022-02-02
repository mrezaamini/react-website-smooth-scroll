import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarButton, SidebarWrapper, SidebarButtonRoute,SidebarMenu,SidebarLink } from './SidebarElements';
const Sidebar = () => {
  return(
      <SidebarContainer>
          <Icon>
              <CloseIcon/>
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to="about">About</SidebarLink>
                  <SidebarLink to="discovery">discovery</SidebarLink>
                  <SidebarLink to="services">Services</SidebarLink>
                  <SidebarLink to="signup">Sign Up</SidebarLink>
              </SidebarMenu>
              <SidebarButton>
                  <SidebarButtonRoute to="/signin">Sign In</SidebarButtonRoute>
              </SidebarButton>
          </SidebarWrapper>
      </SidebarContainer>
  )
};

export default Sidebar;
