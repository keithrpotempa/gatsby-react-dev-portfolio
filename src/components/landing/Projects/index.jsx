import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
// import Star from 'components/common/Icons/Star';
// import Fork from 'components/common/Icons/Fork';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const {
    github: {
      viewer: {
        pinnedItems: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            pinnedItems(first: 10) {
              edges {
                node {
                  ... on GitHub_Repository {
                    id
                    name
                    url
                    description
                    homepageUrl
                    stargazers {
                      totalCount
                    }
                    forkCount
                    languages(first: 3) {
                      nodes {
                        id
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  // as="a" href={node.url} target="_blank" rel="noopener noreferrer"
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {edges.map(({ node }) => (
          <Item key={node.id} theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <TitleWrap>
                <Stats theme={theme}>
                  <IconButton
                    variant="contained"
                    size="large"
                    color="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={node.url}
                  >
                    <FontAwesomeIcon icon={faCodeBranch} size="sm" />
                  </IconButton>
                  {node.homepageUrl ? (
                    <IconButton
                      variant="contained"
                      size="large"
                      color="primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={node.homepageUrl}
                    >
                      <FontAwesomeIcon icon={faPlay} size="sm" />
                    </IconButton>
                  ) : null}
                  {/* <div>
                    <Star color={theme === "light" ? "#000" : "#fff"} />
                    <span>{node.stargazers.totalCount}</span>
                  </div>
                  <div>
                    <Fork color={theme === "light" ? "#000" : "#fff"} />
                    <span>{node.forkCount}</span>
                  </div> */}
                </Stats>
                <Stats theme={theme}>
                  <Languages>
                    {node.languages.nodes.map(({ id, name }) => (
                      <span key={id}>{name}</span>
                    ))}
                  </Languages>
                </Stats>
              </TitleWrap>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
