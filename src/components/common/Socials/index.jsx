import React from 'react';
import social from './social.json';
import Box from '@material-ui/core/Box';
import SocialButton from './social-button';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const Socials = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
		
	return (
		<Box 
			display="flex" 
			flexDirection="row" 
			justifyContent="flex-start" 
			mb={4}
		>
			{social.map(({ id, name, link, icon }) => (
				<SocialButton key={id} name={name} link={link} icon={icon} isSmallScreen={isSmallScreen}/>
			))}
		</Box>
	)
}