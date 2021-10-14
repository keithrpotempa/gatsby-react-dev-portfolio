import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const SocialButton = ({ name, link, icon, isSmallScreen }) => {
  const classes = useStyles();
  const resume = name.toLowerCase() == 'resume';

  return (
    <Button
      href={link}
      className={classes.margin}
      variant="contained"
      size={isSmallScreen ? 'small' : 'medium'}
      color="primary"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={resume ? 'download my resume' : `follow me on ${name}`}
      startIcon={resume && !isSmallScreen ? <FontAwesomeIcon icon={faFileAlt} size="2x" /> : ''}
    >
      {resume ? (
        isSmallScreen ? (
          <FontAwesomeIcon icon={faFileAlt} />
        ) : (
          'Resume'
        )
      ) : (
        <FontAwesomeIcon icon={['fab', icon]} size={isSmallScreen ? '1x' : '2x'} />
      )}
    </Button>
  );
};

export default SocialButton;
