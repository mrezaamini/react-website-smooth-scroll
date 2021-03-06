import React from 'react';
import {Button} from '../ButtonElement';
import { InfoContainer,
InfoWrapper,
InfoRow,
InfoCol1,
TextWrapper,
TopLine,
Heading,
Subtitle,
ButtonWrapper,
InfoCol2,
ImageWrapper,
Image } from './infoElements';

const InfoSection = ({lightBackground, buttonLabel, id, imageStart, topLine, headline, lightText, darkText, image, alt, description, primary, dark, dark2}) => {
  return (
      <InfoContainer lightBackground={lightBackground} id={id}>
          <InfoWrapper>
              <InfoRow imageStart = {imageStart}>
                  <InfoCol1>
                      <TextWrapper>
                          <TopLine>
                             {topLine}
                          </TopLine>
                          <Heading lightText = {lightText}>
                              {headline}
                          </Heading>
                          <Subtitle darkText = {darkText}>
                              {description}
                          </Subtitle>
                          <ButtonWrapper>
                              <Button to="home" smooth={true} duration={500} spy={true} exact={true}
                              offset={-80} primary={primary ? 1 : 0} dark={dark ? 1: 0} dark2={dark2 ? 1: 0}>{buttonLabel}</Button>
                          </ButtonWrapper>
                      </TextWrapper>
                  </InfoCol1>
                  <InfoCol2>
                      <ImageWrapper>
                          <Image src={image} alt={alt}/>
                      </ImageWrapper>
                  </InfoCol2>
              </InfoRow>
          </InfoWrapper>
      </InfoContainer>
  )
};

export default InfoSection;
