import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig, email, whatsapp } from '@config';
import styled from 'styled-components';
import { theme, mixins, Section } from '@styles';
const { colors, fonts } = theme;

const StyledContainer = styled(Section)`
  max-width: 760px;
  text-align: center;
  padding-bottom: 110px;
  h2 {
    font-size: clamp(40px, 5vw, 62px);
    line-height: 1.1;
    margin-bottom: 24px;
  }
  .overline {
    font: 13px ${fonts.SFMono};
    color: ${colors.green};
    margin-bottom: 22px;
  }
  .email {
    display: inline-block;
    margin-top: 28px;
    font-size: 17px;
    overflow-wrap: anywhere;
  }
`;
const StyledActions = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
  a {
    ${mixins.bigButton};
  }
`;

const Contact = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);
  return (
    <StyledContainer id="contact" ref={revealContainer}>
      <p className="overline">Get in touch with me</p>
      <h2>{frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <StyledActions>
        <a href={`mailto:${email}`}>{frontmatter.buttonText}</a>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer">
          Message me on WhatsApp
        </a>
      </StyledActions>
      <a className="email" href={`mailto:${email}`}>
        {email}
      </a>
    </StyledContainer>
  );
};

Contact.propTypes = { data: PropTypes.array.isRequired };
export default Contact;
