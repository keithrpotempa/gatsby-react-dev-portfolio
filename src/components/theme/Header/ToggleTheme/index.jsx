import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard, faDungeon } from '@fortawesome/free-solid-svg-icons';
// import { faSun } from '@fortawesome/free-solid-svg-icons';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper type="button" theme={theme} onClick={toggleTheme}>
      <FontAwesomeIcon icon={theme === 'light' ? faDungeon : faHatWizard } />
    </Wrapper>
  );
};

export default ToggleTheme;
