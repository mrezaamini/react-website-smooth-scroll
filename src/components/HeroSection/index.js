import React, {useState} from 'react';
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBackground, VideoBackground, HeroContent, HeroH1, HeroP, HeroButtonWrapper, ArrowForward
, ArrowRight } from './HeroElements';

const Hero = () => {
    const [hover, setHover] = useState(false);
    const onHover = () =>{
        setHover(!hover)
    }
  return (
      <HeroContainer>
          <HeroBackground>
              <VideoBackground autoPlay loop muted src = {Video} type='video/mp4' />
          </HeroBackground>
          <HeroContent>
              <HeroH1>My title</HeroH1>
              <HeroP>
                  Sign up for a new account today and recieve $120 in credit toward your next payment
              </HeroP>
              <HeroButtonWrapper>
                  <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                      Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                  </Button>
              </HeroButtonWrapper>
          </HeroContent>
      </HeroContainer>
  )
};

export default Hero;
