import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import { Wrapper, IntroWrapper, Details } from './styles';
import { Socials } from 'components/common/Socials';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

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
          <Box display="flex" flexDirection="row">
            <Socials/>
            <Button
              variant="contained"
              size="large"
              className={classes.margin}
              color="primary"
              target="_blank" 
              rel="noopener noreferrer" 
              startIcon={<FontAwesomeIcon icon={faFileAlt} size="2x"/>}
              href="https://res.cloudinary.com/krp/image/upload/v1614724673/keithpotempa.com/Potempa_Dev_Resume_v9.pdf"
            >
              Resume
            </Button>
          </Box>
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
