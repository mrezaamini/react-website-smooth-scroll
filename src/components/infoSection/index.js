import React from 'react';
import {Button} from '../ButtonElement';
import imagem from '../../images/svg-1.svg'

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

const InfoSection = ({lightBackground, buttonLabel, id, imageStart, topLine, headline, lightText, darkText, image, alt, description}) => {
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
                              <Button to="home">{buttonLabel}</Button>
                          </ButtonWrapper>
                      </TextWrapper>
                  </InfoCol1>
                  <InfoCol2>
                      <ImageWrapper>
                          <Image src={imagem} alt={alt}/>
                          {console.log({image})}
                      </ImageWrapper>
                  </InfoCol2>
              </InfoRow>
          </InfoWrapper>
      </InfoContainer>
  )
};

export default InfoSection;
