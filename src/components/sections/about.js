import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';
import { theme, mixins, Section, Heading } from '@styles';
const { colors, fonts } = theme;

const StyledIntro = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 65px;
  align-items: start;
  a {
    ${mixins.inlineLink};
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;
const StyledPortrait = styled.figure`
  margin: 0;
  .portrait {
    border-radius: 12px;
    background: ${colors.lightNavy};
    border: 1px solid ${colors.lightestNavy};
    filter: grayscale(100%);
    transition: filter 300ms ease;
  }
  &:hover .portrait {
    filter: grayscale(0%);
  }
  figcaption {
    padding-top: 15px;
    font: 12px/1.7 ${fonts.SFMono};
    color: ${colors.lightSlate};
  }
  @media (max-width: 768px) {
    max-width: 280px;
  }
`;
const StyledSkills = styled.div`
  margin-top: 45px;
  padding-top: 32px;
  border-top: 1px solid ${colors.lightestNavy};
  h3 {
    font-size: 24px;
    margin-bottom: 22px;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px 40px;
    list-style: none;
    margin: 0;
    padding: 0;
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
  li {
    font-size: 17px;
  }
  strong {
    display: block;
    font: 13px/1.5 ${fonts.SFMono};
    color: ${colors.green};
    margin-bottom: 8px;
  }
`;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);
  return (
    <Section id="about" ref={revealContainer}>
      <Heading>{frontmatter.title}</Heading>
      <StyledIntro>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <StyledPortrait>
          <Img
            className="portrait"
            fluid={frontmatter.avatar.childImageSharp.fluid}
            alt="My portrait, Danyal Ali Asghar"
          />
          <figcaption>I’m based in Karachi, Pakistan.</figcaption>
        </StyledPortrait>
      </StyledIntro>
      <StyledSkills>
        <h3>What I work with</h3>
        <ul>
          {frontmatter.skills.map(skill => {
            const separator = skill.indexOf(':');
            return (
              <li key={skill}>
                <strong>{skill.slice(0, separator)}</strong>
                {skill.slice(separator + 1).trim()}
              </li>
            );
          })}
        </ul>
      </StyledSkills>
    </Section>
  );
};

About.propTypes = { data: PropTypes.array.isRequired };
export default About;
