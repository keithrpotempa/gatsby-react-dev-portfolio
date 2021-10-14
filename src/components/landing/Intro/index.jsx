import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import { Socials } from 'components/common/Socials';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Wrapper, IntroWrapper, Details } from './styles';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    '& img': {
      marginBottom: 0,
    },
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
          <Grid>
            <Socials />
          </Grid>
        </Details>
        <Avatar
          alt="I'm a full-stack developer building tools to improve lives"
          className={classes.avatar}
          src="https://res.cloudinary.com/krp/image/upload/v1634242542/keithpotempa.com/Avatar_pxi18m.webp"
        />
      </IntroWrapper>
    </Wrapper>
  );
};
