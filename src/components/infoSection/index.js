import React from 'react';
import {Button} from 'react-scroll';

const InfoSection = () => {
  return (
      <InfoContainer id = {id}>
          <InfoWrapper>
              <InfoRow>
                  <InfoCol1>
                      <TextWrapper>
                          <TopLine>
                              Top Line
                          </TopLine>
                          <Heading>
                              Heading
                          </Heading>
                          <Subtitle>
                              Subtitle
                          </Subtitle>
                          <ButtonWrapper>
                              <Button to="home">Button</Button>
                          </ButtonWrapper>
                      </TextWrapper>
                  </InfoCol1>
              </InfoRow>
          </InfoWrapper>
      </InfoContainer>
  )
};

export default InfoSection;
