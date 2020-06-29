import React from "react";
import { animated } from "react-spring";
import styled from "styled-components";
import * as easings from "d3-ease";

import {
  PreviewContainer,
  AnimationContainer,
  GroundContainer,
  AnimationTitle,
} from "./common";
import { Keyframes } from "react-spring/renderprops";

const Ball = styled(animated.div)`
  width: 4em;
  height: 4em;
  border-radius: 50%;
  background-color: #fd79a8;
  border: 2px solid #252525;
`;

const bounceTransition = {
  y: {
    duration: 1,
    yoyo: Infinity,
    ease: "easeIn",
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 1,
  },
};

const Container = Keyframes.Spring(async (next) => {
  while (true) {
    await next({
      from: { transform: `translateY(0em)` },
      to: { transform: `translateY(12.8em)` },
      config: {
        tension: 10,
        friction: 20,
        velocity: 0,
        mass: 1,
        easing: easings.easeCubicIn,
        duration: 1000,
      },
    });
    await next({
      from: { transform: `translateY(12.8em)` },
      to: { transform: `translateY(0em)` },
      config: {
        tension: 30,
        friction: 20,
        velocity: 1,
        mass: 1,
        duration: 1100,
        easing: easings.easeCubicOut,
      },
    });
  }
});

export function SpringAnimation() {
  return (
    <PreviewContainer>
      <AnimationTitle>React Spring</AnimationTitle>
      <AnimationContainer>
        <Container>
          {(styles) => {
            console.log("Styles: ", styles);
            return <Ball style={styles} />;
          }}
        </Container>
        <GroundContainer />
      </AnimationContainer>
    </PreviewContainer>
  );
}
