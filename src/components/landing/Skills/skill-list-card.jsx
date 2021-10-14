import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from 'providers/ThemeProvider';
// import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chip from '@material-ui/core/Chip';
import { Card } from 'components/common';
import { Content, Item } from './styles';

const useStyles = makeStyles(theme => ({
  list: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export const SkillListCard = ({ list, listName }) => {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles();

  return (
    <Item key={listName} theme={theme}>
      <Card theme={theme}>
        <Content>
          <h4>{listName}</h4>
          <div className={classes.list}>
            {list.map((item, i) => (
              <Chip
                key={i}
                avatar={item.icon ? <FontAwesomeIcon icon={['fab', item.icon]} /> : null}
                label={item.name}
              />
            ))}
          </div>
        </Content>
      </Card>
    </Item>
  );
};
