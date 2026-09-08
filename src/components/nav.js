import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';
import { navLinks } from '@config';
import { IconLogo } from '@components/icons';
import Menu from './menu';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
const { colors, fonts } = theme;

const StyledContainer = styled.header`
  position: fixed;
  inset: 0 0 auto;
  z-index: 20;
  height: 80px;
  padding: 0 40px;
  background: rgba(10, 25, 47, 0.96);
  border-bottom: 1px solid rgba(168, 178, 209, 0.1);
  backdrop-filter: blur(14px);
  ${media.tablet`height: 72px; padding: 0 25px;`};
`;
const StyledNav = styled.nav`
  ${mixins.flexBetween};
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  color: ${colors.lightestSlate};
  font-family: ${fonts.SFMono};
`;
const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  color: ${colors.green};
  svg {
    width: 40px;
    height: 40px;
    fill: none;
  }
`;
const StyledHamburger = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-right: -10px;
  background: transparent;
  color: ${colors.green};
  svg {
    width: 26px;
    height: 26px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
  }
  ${media.tablet`display: flex;`};
`;
const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  ${media.tablet`display: none;`};
`;
const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 12px;
  a {
    padding: 14px 0;
  }
  @media (max-width: 960px) {
    gap: 14px;
    font-size: 11px;
  }
`;

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    if (menuButton.current) {
      menuButton.current.focus();
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <StyledContainer>
      <StyledNav aria-label="Main navigation">
        <StyledLogo to="/" aria-label="My portfolio home">
          <IconLogo />
        </StyledLogo>
        <StyledHamburger
          type="button"
          ref={menuButton}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(true)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </StyledHamburger>
        <StyledLinks>
          <StyledList>
            {navLinks.map(({ url, name }) => (
              <li key={url}>
                <Link to={url}>{name}</Link>
              </li>
            ))}
          </StyledList>
        </StyledLinks>
      </StyledNav>
      <Menu menuOpen={menuOpen} closeMenu={closeMenu} />
    </StyledContainer>
  );
};

export default Nav;
