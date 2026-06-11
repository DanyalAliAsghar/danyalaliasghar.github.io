import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';
import { theme, mixins, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  max-width: 700px;
`;
const StyledList = styled.ul`
  margin-top: 50px;
  padding: 0;
  list-style: none;
`;
const StyledCert = styled.li`
  position: relative;
  padding-left: 30px;
  padding-bottom: 25px;
  border-left: 2px solid ${colors.lightestNavy};
  &:last-of-type {
    border-left-color: transparent;
    padding-bottom: 0;
  }
  &:before {
    content: '';
    position: absolute;
    left: -6px;
    top: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${colors.green};
  }
`;
const StyledTitle = styled.h4`
  margin: 0 0 8px;
  font-size: ${fontSizes.lg};
  font-weight: 500;
  color: ${colors.lightestSlate};
  a {
    ${mixins.inlineLink};
  }
`;
const StyledMeta = styled.p`
  margin: 0;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smish};
  color: ${colors.lightSlate};
`;

const formatDate = dateString => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};

const Certifications = ({ data }) => {
  const revealContainer = useRef(null);
  const revealCerts = useRef([]);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
    revealCerts.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 75)));
  }, []);

  const certifications = data.filter(({ node }) => node);

  return (
    <StyledContainer id="certifications" ref={revealContainer}>
      <Heading>Certifications</Heading>

      <StyledList>
        {certifications.map(({ node }, i) => {
          const { frontmatter } = node;
          const { title, issuer, url, date } = frontmatter;

          return (
            <StyledCert key={i} ref={el => (revealCerts.current[i] = el)}>
              <StyledTitle>
                {url ? (
                  <a href={url} target="_blank" rel="nofollow noopener noreferrer">
                    {title}
                  </a>
                ) : (
                  title
                )}
              </StyledTitle>
              <StyledMeta>
                {issuer} · {formatDate(date)}
              </StyledMeta>
            </StyledCert>
          );
        })}
      </StyledList>
    </StyledContainer>
  );
};

Certifications.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Certifications;
