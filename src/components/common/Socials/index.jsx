import React from 'react';
import { Links } from './styles';
import social from './social.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Socials = () => (
	<Links>
		{social.map(({ id, name, link, icon }) => (
			<a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
				<FontAwesomeIcon icon={['fab', icon]} size="3x" />
			</a>
		))}
	</Links>
)

