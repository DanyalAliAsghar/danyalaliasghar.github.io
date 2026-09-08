import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { theme, mixins } from '@styles';

const drawOutline = keyframes`
  from { stroke-dashoffset: 100; }
  to { stroke-dashoffset: 0; }
`;
const revealLetter = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const leaveLogo = keyframes`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.25); }
`;
const leaveIntro = keyframes`
  0%, 88% { opacity: 1; visibility: visible; }
  100% { opacity: 0; visibility: hidden; }
`;

const StyledContainer = styled.div`
  ${mixins.flexCenter};
  position: fixed;
  inset: 0;
  z-index: 99;
  background: ${theme.colors.darkNavy};
  color: ${theme.colors.green};
  pointer-events: none;
  animation: ${leaveIntro} 2700ms ease-in-out both;

  html:has(:target) & {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;
const StyledLogo = styled.div`
  width: 100px;
  height: 100px;
  animation: ${leaveLogo} 350ms 2100ms ease-in-out both;

  svg {
    display: block;
    width: 100%;
    height: 100%;
    overflow: visible;
  }
  path {
    stroke-dasharray: 100;
    animation: ${drawOutline} 1400ms 120ms cubic-bezier(0.65, 0, 0.35, 1) both;
  }
  text {
    animation: ${revealLetter} 600ms 1100ms ease-in-out both;
  }
`;

const Loader = ({ finishLoading }) => {
  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionPreference.matches) {
      finishLoading();
      return undefined;
    }

    // The CSS also hides the overlay, so delayed JavaScript cannot leave it covering the page.
    const timeout = window.setTimeout(finishLoading, 2900);
    const handleKeyDown = event => {
      if (event.key === 'Tab' || event.key === 'Escape') {
        finishLoading();
      }
    };
    const handleMotionChange = event => {
      if (event.matches) {
        finishLoading();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('pointerdown', finishLoading, { once: true });
    window.addEventListener('wheel', finishLoading, { once: true, passive: true });
    if (motionPreference.addEventListener) {
      motionPreference.addEventListener('change', handleMotionChange);
    } else {
      motionPreference.addListener(handleMotionChange);
    }

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('pointerdown', finishLoading);
      window.removeEventListener('wheel', finishLoading);
      if (motionPreference.removeEventListener) {
        motionPreference.removeEventListener('change', handleMotionChange);
      } else {
        motionPreference.removeListener(handleMotionChange);
      }
    };
  }, [finishLoading]);

  return (
    <>
      <noscript
        dangerouslySetInnerHTML={{
          __html: '<style>.portfolio-intro { display: none !important; }</style>',
        }}
      />
      <StyledContainer
        className="portfolio-intro"
        aria-hidden="true"
        onAnimationEnd={event => {
          if (event.target === event.currentTarget) {
            finishLoading();
          }
        }}
      >
        <StyledLogo>
          <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
            <path
              pathLength="100"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M50 5 11 27 11 72 50 95 89 73 89 28Z"
            />
            <text x="36" y="66" fill="currentColor" fontSize="55" fontFamily="Consolas, monospace">
              D
            </text>
          </svg>
        </StyledLogo>
      </StyledContainer>
    </>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
