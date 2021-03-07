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
          <span>© All rights are reserved | </span> 
          <span>{new Date().getFullYear()} | </span>
          <span><a 
            href="https://github.com/keithrpotempa/gatsby-react-dev-portfolio" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            Source Code
          </a> | </span>

          <a 
            href="https://www.gatsbyjs.com/starters/smakosh/gatsby-portfolio-dev" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            Gatsby Starter
          </a>
        </span>
      </Details>
      <Socials/>
    </Flex>
  </Wrapper>
);
