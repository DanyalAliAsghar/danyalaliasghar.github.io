import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';
import { theme, mixins, Section, Heading } from '@styles';
const { colors, fonts } = theme;

const StyledList = styled.ul`
  padding: 0;
  margin: 30px 0 0;
  list-style: none;
`;
const StyledCert = styled.li`
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr);
  gap: 30px;
  padding: 24px 0;
  border-top: 1px solid ${colors.lightestNavy};
  h3 {
    font-size: 22px;
    line-height: 1.3;
    margin-bottom: 4px;
  }
  a {
    ${mixins.inlineLink};
  }
  p {
    font-size: 17px;
    margin: 0;
  }
  time {
    font: 12px/1.7 ${fonts.SFMono};
    color: ${colors.lightSlate};
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

const formatDate = date =>
  new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

const Certifications = ({ data }) => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);
  return (
    <Section id="certifications" ref={revealContainer}>
      <Heading>How I keep learning</Heading>
      <p>I’ve completed the following certifications and training in AI and Python.</p>
      <StyledList>
        {data.map(({ node }) => {
          const { title, issuer, url, date } = node.frontmatter;
          return (
            <StyledCert key={title}>
              <time dateTime={date.slice(0, 7)}>{formatDate(date)}</time>
              <div>
                <h3>
                  {url ? (
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {title}
                    </a>
                  ) : (
                    title
                  )}
                </h3>
                <p>{issuer}</p>
              </div>
            </StyledCert>
          );
        })}
      </StyledList>
    </Section>
  );
};

Certifications.propTypes = { data: PropTypes.array.isRequired };
export default Certifications;
