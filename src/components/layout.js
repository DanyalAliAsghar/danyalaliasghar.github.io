import React, { useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Head, Nav, Social, Footer } from '@components';
import WhatsApp from './whatsapp';
import styled from 'styled-components';
import { GlobalStyle, theme } from '@styles';
const { colors, fontSizes, fonts } = theme;

const SkipToContent = styled.a`
  position: fixed;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -99;
  &:focus,
  &:active {
    outline: 0;
    color: ${colors.green};
    background-color: ${colors.lightNavy};
    border-radius: ${theme.borderRadius};
    padding: 18px 23px;
    font-size: ${fontSizes.sm};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    overflow: auto;
    z-index: 100;
  }
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const timeout = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          if (!el.hasAttribute('tabindex')) {
            el.setAttribute('tabindex', '-1');
          }
          el.scrollIntoView();
          el.focus({ preventScroll: true });
        }
      }, 0);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [location.hash]);

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={({ site }) => (
        <div id="root">
          <Head metadata={site.siteMetadata} pathname={location.pathname} />

          <GlobalStyle />

          <SkipToContent href="#content">Skip to content</SkipToContent>

          <StyledContent>
            <Nav />
            <Social isHome={false} />
            <div id="content" tabIndex={-1}>
              {children}
              <Footer />
            </div>
            <WhatsApp />
          </StyledContent>
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
