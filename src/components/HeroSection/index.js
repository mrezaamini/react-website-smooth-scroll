import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
  HeroContent,
  HeroH1,
  HeroP,
  HeroButtonWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../../components/ButtonElement";

const Hero = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      {" "}
      <div>kir</div>
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBackground>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and recieve $120 in credit toward your
          next payment.
        </HeroP>
        <HeroButtonWrapper>
          <Button
            to="signup"
            smooth={true}
            duration={500}
            primary={true}
            dark={true}
            spy={true}
            exact="true"
            offset={-80}
            onMouseEnter={onHover}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroButtonWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
