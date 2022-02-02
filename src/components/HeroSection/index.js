import React from 'react';

const Hero = () => {
  return (
      <HeroContainer>
          <HeroBackground>
              <VideoBackground autoPlay loop muted src = {video} type='video/mp4' />
          </HeroBackground>
      </HeroContainer>
  )
};

export default Hero;
