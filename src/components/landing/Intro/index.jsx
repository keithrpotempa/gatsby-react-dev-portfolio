import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import { Wrapper, IntroWrapper, Details } from './styles';
import { Socials } from 'components/common/Socials';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    "& img": {
      marginBottom: 0,
    }
  },
}));

export const Intro = () => {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles();

  return (
    <Wrapper id="about">
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Keith Potempa</h1>
          <h4>I'm a full-stack developer building tools to improve lives</h4>
          <Grid xs={12}>
            <Socials/>
          </Grid>
        </Details>
        <Avatar 
          alt="I'm a full-stack developer building tools to improve lives" 
          className={classes.avatar}
          src="https://res.cloudinary.com/krp/image/upload/v1589980572/keithpotempa.com/Potempa_Keith_browser_oz7n72.jpg" 
        />
      </IntroWrapper>
    </Wrapper>
  );
};
