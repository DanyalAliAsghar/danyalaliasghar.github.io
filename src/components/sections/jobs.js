import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';
import { theme, mixins, Section, Heading } from '@styles';
const { colors, fonts } = theme;

const StyledTimeline = styled.div`
  display: grid;
  gap: 42px;
`;
const StyledJob = styled.article`
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 35px;
  border-top: 1px solid ${colors.lightestNavy};
  padding-top: 30px;
  h3 {
    font-size: 27px;
    line-height: 1.2;
    margin-bottom: 8px;
  }
  .company {
    color: ${colors.green};
    font-size: 19px;
    margin-bottom: 16px;
  }
  .range {
    color: ${colors.lightSlate};
    font: 12px/1.9 ${fonts.SFMono};
    margin: 0;
  }
  ul {
    ${mixins.fancyList};
  }
  a {
    ${mixins.inlineLink};
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

const Jobs = ({ data }) => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);
  return (
    <Section id="jobs" ref={revealContainer}>
      <Heading>Where I’ve worked</Heading>
      <StyledTimeline>
        {data.map(({ node }) => {
          const { title, company, range, url } = node.frontmatter;
          return (
            <StyledJob key={company}>
              <div>
                <p className="range">{range}</p>
              </div>
              <div>
                <h3>{title}</h3>
                <p className="company">
                  {url ? (
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {company}
                    </a>
                  ) : (
                    company
                  )}
                </p>
                <div dangerouslySetInnerHTML={{ __html: node.html }} />
              </div>
            </StyledJob>
          );
        })}
      </StyledTimeline>
    </Section>
  );
};

Jobs.propTypes = { data: PropTypes.array.isRequired };
export default Jobs;
