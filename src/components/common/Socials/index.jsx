import React from 'react';
import social from './social.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export const Socials = () => {
	const classes = useStyles();
	
	return (
	<Box display="flex" flexDirection="row">
		{social.map(({ id, name, link, icon }) => (
			<Button 
				key={id} 
				href={link} 
				className={classes.margin}
				variant="contained"
				size="large"
				color="primary"
				target="_blank" 
				rel="noopener noreferrer" 
				aria-label={`follow me on ${name}`}
			>
				<FontAwesomeIcon icon={['fab', icon]} size="2x" />
			</Button>
		))}
	</Box>
	)
}

