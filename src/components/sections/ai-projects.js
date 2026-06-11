import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { FormattedIcon } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const StyledGrid = styled.div`
  margin-top: 50px;
  width: 100%;

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 15px;
    position: relative;
  }
`;
const StyledProjectInner = styled.div`
  ${mixins.boxShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${colors.lightNavy};
`;
const StyledProject = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledProjectInner} {
      transform: translateY(-5px);
    }
  }
`;
const StyledProjectHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
  width: 100%;
`;
const StyledFolder = styled.div`
  color: ${colors.green};
  svg {
    width: 40px;
    height: 40px;
  }
`;
const StyledProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.xxl};
  color: ${colors.lightestSlate};
`;
const StyledProjectDescription = styled.div`
  font-size: 17px;
  color: ${colors.lightSlate};
  a {
    ${mixins.inlineLink};
  }
`;
const StyledTechList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;

  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xs};
    color: ${colors.green};
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const AIProjects = ({ data }) => {
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const projects = data.filter(({ node }) => node);

  return (
    <StyledContainer id="ai-projects">
      <Heading ref={revealTitle}>AI Projects</Heading>

      <StyledGrid>
        <div className="projects">
          {projects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { title, tech } = frontmatter;

            return (
              <StyledProject key={i} ref={el => (revealProjects.current[i] = el)} tabIndex="0">
                <StyledProjectInner>
                  <header>
                    <StyledProjectHeader>
                      <StyledFolder>
                        <FormattedIcon name="Folder" />
                      </StyledFolder>
                    </StyledProjectHeader>
                    <StyledProjectName>{title}</StyledProjectName>
                    <StyledProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                  </header>
                  <footer>
                    {tech && (
                      <StyledTechList>
                        {tech.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </StyledTechList>
                    )}
                  </footer>
                </StyledProjectInner>
              </StyledProject>
            );
          })}
        </div>
      </StyledGrid>
    </StyledContainer>
  );
};

AIProjects.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AIProjects;
