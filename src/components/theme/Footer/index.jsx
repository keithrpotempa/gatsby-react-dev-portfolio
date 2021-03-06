import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Details } from './styles';
import { Socials } from '../../common/Socials/index';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Keith Potempa</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <span aria-label="love" role="img">
            💖
          </span>{' '}
          by{' '}
          <a href="https://smakosh.com/?ref=portfolio-dev" rel="noopener noreferrer" target="_blank">
            Smakosh
          </a>
        </span>
      </Details>
      <Socials/>
    </Flex>
  </Wrapper>
);
