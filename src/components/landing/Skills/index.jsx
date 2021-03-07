import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import skillList from "./skillList";
import { SkillListCard } from './skill-list-card';
import { Grid, Wrapper } from './styles';
import { Container } from 'components/common';


const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  grid: {
    marginLeft: "1.2rem",
  }
}));

export const Skills = () => {
  const classes = useStyles();

  return (
    <Wrapper as={Container} id="skills">
      <h2>Skills</h2>
      <Grid>
        {Object.keys(skillList).map(listKey => (         
            <SkillListCard key={listKey} listName={listKey} list={skillList[listKey]} />
        ))}
      </Grid>
    </Wrapper>
  );
};
