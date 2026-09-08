import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';
import { theme, Section, Heading } from '@styles';
const { colors, fonts } = theme;

const StyledIntro = styled.p`
  max-width: 680px;
  margin: -15px 0 30px;
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const StyledProject = styled.article`
  display: flex;
  flex-direction: column;
  padding: 32px;
  border: 1px solid ${colors.lightestNavy};
  border-radius: 12px;
  background: ${colors.lightNavy};
  h3 {
    font-size: 28px;
    line-height: 1.15;
    margin-bottom: 16px;
  }
  .context {
    font: 11px/1.7 ${fonts.SFMono};
    color: ${colors.green};
    margin-bottom: 20px;
  }
  .summary {
    color: ${colors.lightestSlate};
    font-size: 19px;
  }
  .detail {
    font-size: 17px;
    padding-top: 6px;
  }
  @media (max-width: 480px) {
    padding: 24px;
  }
`;
const StyledTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 22px 0 0;
  margin: auto 0 0;
  li {
    font: 11px/1.5 ${fonts.SFMono};
    padding: 5px 9px;
    border: 1px solid ${colors.lightestNavy};
    border-radius: 5px;
    color: ${colors.lightSlate};
  }
`;

const AIProjects = ({ data }) => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);
  return (
    <Section id="ai-projects" ref={revealContainer}>
      <Heading>What I’ve built</Heading>
      <StyledIntro>
        I work across document intelligence, retrieval and automation. Here’s a closer look at the
        systems I’ve built and the decisions behind them.
      </StyledIntro>
      <StyledGrid>
        {data.map(({ node }) => {
          const { title, context, summary, tech } = node.frontmatter;
          return (
            <StyledProject key={title}>
              <p className="context">{context}</p>
              <h3>{title}</h3>
              <p className="summary">{summary}</p>
              <div className="detail" dangerouslySetInnerHTML={{ __html: node.html }} />
              <StyledTechList aria-label="Technologies I used">
                {tech.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </StyledTechList>
            </StyledProject>
          );
        })}
      </StyledGrid>
    </Section>
  );
};

AIProjects.propTypes = { data: PropTypes.array.isRequired };
export default AIProjects;
