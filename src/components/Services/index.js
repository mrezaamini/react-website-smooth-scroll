import React from 'react';
import Icon1 from '../../images/svg-10.svg'
import Icon2 from '../../images/svg-6.svg'
import Icon3 from '../../images/svg-2.svg'
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServiceCard, ServicesIcon, ServicesP } from './sevicesElements';

const Services = () => {
  return (
      <ServicesContainer id="services">
          <ServicesH1>Our Services</ServicesH1>
          <ServicesWrapper>
              <ServiceCard>
                  <ServicesIcon src={Icon1}/>
                  <ServicesH2>Reduce expenses</ServicesH2>
                  <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
              </ServiceCard>
              <ServiceCard>
                  <ServicesIcon src={Icon2}/>
                  <ServicesH2>Virtual Offices</ServicesH2>
                  <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
              </ServiceCard>
              <ServiceCard>
                  <ServicesIcon src={Icon3}/>
                  <ServicesH2>Premium Benefits</ServicesH2>
                  <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
              </ServiceCard>
          </ServicesWrapper>
      </ServicesContainer>
  )
};

export default Services;
