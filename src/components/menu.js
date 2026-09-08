import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { navLinks } from '@config';
import styled from 'styled-components';
import { theme } from '@styles';
const { colors, fonts } = theme;

const StyledContainer = styled.div`
  position: fixed;
  inset: 0;
  height: 100vh;
  height: 100dvh;
  z-index: 30;
  display: ${props => (props.menuOpen ? 'block' : 'none')};
`;
const Backdrop = styled.button`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(2, 12, 27, 0.75);
`;
const Sidebar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: min(85vw, 380px);
  height: 100%;
  margin-left: auto;
  padding: 86px 32px 40px;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: ${colors.lightNavy};
  box-shadow: -10px 0 30px -15px ${colors.shadowNavy};
  color: ${colors.lightestSlate};
  font-family: ${fonts.SFMono};
  @media (max-height: 550px) {
    justify-content: flex-start;
    padding-top: 72px;
    padding-bottom: 24px;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
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
`;
const NavList = styled.ul`
  padding: 0;
  margin: 0 0 24px;
  list-style: none;
  font-size: 16px;
  a {
    display: block;
    padding: 14px 0;
    border-bottom: 1px solid rgba(168, 178, 209, 0.12);
  }
`;

const Menu = ({ menuOpen, closeMenu }) => {
  const dialog = useRef(null);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusable = () => Array.from(dialog.current.querySelectorAll('a[href], button'));
    focusable()[0].focus();

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu();
      }
      if (event.key === 'Tab') {
        const items = focusable();
        const first = items[0];
        const last = items[items.length - 1];
        const outside = !dialog.current.contains(document.activeElement);
        if (event.shiftKey && (document.activeElement === first || outside)) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && (document.activeElement === last || outside)) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen, closeMenu]);

  return (
    <StyledContainer id="mobile-navigation" menuOpen={menuOpen}>
      <Backdrop
        type="button"
        aria-label="Close navigation menu"
        tabIndex={-1}
        onClick={closeMenu}
      />
      <Sidebar ref={dialog} role="dialog" aria-modal="true" aria-label="Navigation menu">
        <CloseButton type="button" aria-label="Close navigation menu" onClick={closeMenu}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </CloseButton>
        <nav aria-label="Mobile navigation">
          <NavList>
            {navLinks.map(({ url, name }) => (
              <li key={url}>
                <Link to={url} onClick={closeMenu}>
                  {name}
                </Link>
              </li>
            ))}
          </NavList>
        </nav>
      </Sidebar>
    </StyledContainer>
  );
};

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default Menu;
