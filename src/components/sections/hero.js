import React from 'react';
import PropTypes from 'prop-types';
import { email, resume } from '@config';
import styled from 'styled-components';
import { theme, mixins, Section } from '@styles';
const { colors, fonts } = theme;

const StyledContainer = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 90vh;
  padding-top: 160px;
  padding-bottom: 70px;
  position: relative;
  @media (max-width: 768px) {
    min-height: auto;
    padding-top: 145px;
    padding-bottom: 65px;
  }
`;
const StyledOverline = styled.p`
  color: ${colors.green};
  margin-bottom: 20px;
  font: 14px ${fonts.SFMono};
`;
const StyledTitle = styled.h1`
  font-size: clamp(38px, 5.7vw, 76px);
  line-height: 1.08;
  letter-spacing: -0.035em;
  margin: 0 0 16px;
`;
const StyledSubtitle = styled.p`
  max-width: 850px;
  font-size: clamp(34px, 4.8vw, 62px);
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.025em;
  color: ${colors.lightSlate};
  margin-bottom: 26px;
`;
const StyledDescription = styled.div`
  max-width: 660px;
  font-size: 21px;
  a {
    ${mixins.inlineLink};
  }
`;
const StyledActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin-top: 20px;
`;
const StyledPrimaryLink = styled.a`
  ${mixins.bigButton};
  background: ${colors.green};
  color: ${colors.navy};
  font-weight: 600;
  &:hover,
  &:focus {
    background: ${colors.white};
    color: ${colors.navy};
    border-color: ${colors.white};
  }
`;
const StyledResumeLink = styled.a`
  ${mixins.bigButton};
`;
const StyledFootnote = styled.a`
  margin-top: 44px;
  color: ${colors.lightSlate};
  font: 13px ${fonts.SFMono};
  padding: 10px 0;
  span {
    margin-left: 10px;
    color: ${colors.green};
  }
`;

const Hero = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  return (
    <StyledContainer aria-labelledby="intro-title">
      <StyledOverline>{frontmatter.title}</StyledOverline>
      <StyledTitle id="intro-title">{frontmatter.name}.</StyledTitle>
      <StyledSubtitle>{frontmatter.subtitle}</StyledSubtitle>
      <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
      <StyledActions>
        <StyledPrimaryLink href={`mailto:${email}`}>{frontmatter.buttonText}</StyledPrimaryLink>
        <StyledResumeLink href={resume} download="Danyal-Ali-Asghar-Resume.pdf">
          Download my resume
        </StyledResumeLink>
      </StyledActions>
      <StyledFootnote href="#ai-projects">
        Take a look at my work <span aria-hidden="true">&darr;</span>
      </StyledFootnote>
    </StyledContainer>
  );
};

Hero.propTypes = { data: PropTypes.array.isRequired };
export default Hero;
