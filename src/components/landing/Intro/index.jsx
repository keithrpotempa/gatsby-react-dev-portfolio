import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Keith Potempa</h1>
          <h4>I'm a full-stack developer building tools to improve lives</h4>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
        <Thumbnail>
          <img src="https://res.cloudinary.com/krp/image/upload/v1589980572/keithpotempa.com/Potempa_Keith_browser_oz7n72.jpg" alt="I'm a full-stack developer building tools to improve lives" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
