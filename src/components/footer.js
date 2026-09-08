import React from 'react';
import { FormattedIcon } from '@components/icons';
import { socialMedia } from '@config';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
const { colors, fonts } = theme;

const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 30px 90px 38px;
  border-top: 1px solid rgba(168, 178, 209, 0.1);
  text-align: center;
  ${media.tablet`padding: 28px 25px 100px;`};
`;
const StyledSocialList = styled.ul`
  display: none;
  justify-content: center;
  gap: 16px;
  padding: 0;
  margin: 0 0 16px;
  list-style: none;
  ${media.tablet`display: flex;`};
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    color: ${colors.lightSlate};
    &:hover {
      color: ${colors.green};
    }
  }
  svg {
    width: 21px;
    height: 21px;
  }
`;
const StyledMetadata = styled.div`
  max-width: 620px;
  color: ${colors.lightSlate};
  font-family: ${fonts.SFMono};
  font-size: 12px;
  line-height: 1.8;
  p {
    margin: 0;
  }
  a {
    text-underline-offset: 4px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => (
  <StyledContainer>
    <StyledSocialList aria-label="My professional profiles">
      {socialMedia.map(({ name, url }) => (
        <li key={name}>
          <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`My ${name} profile`}>
            <FormattedIcon name={name} />
          </a>
        </li>
      ))}
    </StyledSocialList>
    <StyledMetadata>
      <p>
        I built this portfolio to share my work.{' '}
        <a
          href="https://github.com/DanyalAliAsghar/danyalaliasghar.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          View my source code
        </a>
        .
      </p>
      <p>
        I adapted the original design by{' '}
        <a href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer">
          Brittany Chiang
        </a>
        .
      </p>
    </StyledMetadata>
  </StyledContainer>
);

export default Footer;
