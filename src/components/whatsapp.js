import React from 'react';
import { whatsapp } from '@config';
import styled from 'styled-components';
import { theme } from '@styles';

const StyledLink = styled.a`
  position: fixed;
  right: max(24px, env(safe-area-inset-right));
  bottom: max(24px, env(safe-area-inset-bottom));
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border: 1px solid rgba(100, 255, 218, 0.5);
  border-radius: 50%;
  background: ${theme.colors.lightNavy};
  color: ${theme.colors.green};
  box-shadow: 0 6px 24px rgba(2, 12, 27, 0.4);
  transition: transform 180ms ease, background-color 180ms ease;
  &:hover,
  &:focus-visible {
    transform: translateY(-3px);
    background: ${theme.colors.navy};
  }
  svg {
    width: 28px;
    height: 28px;
    fill: currentColor;
  }
  @media (max-width: 768px) {
    right: max(18px, env(safe-area-inset-right));
    bottom: max(18px, env(safe-area-inset-bottom));
    width: 52px;
    height: 52px;
  }
`;

const WhatsApp = () => (
  <StyledLink
    href={whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Message me on WhatsApp (opens in a new tab)"
    title="Message me on WhatsApp"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M20.52 3.48A11.87 11.87 0 0012.06 0C5.47 0 .1 5.36.1 11.95c0 2.11.55 4.17 1.6 5.99L0 24l6.22-1.63a11.9 11.9 0 005.83 1.49h.01C18.65 23.86 24 18.5 24 11.91c0-3.19-1.24-6.19-3.48-8.43zM12.06 21.85a9.9 9.9 0 01-5.05-1.38l-.36-.21-3.69.97.98-3.6-.23-.37a9.88 9.88 0 01-1.52-5.31c0-5.47 4.45-9.92 9.92-9.92a9.85 9.85 0 017.02 2.91 9.86 9.86 0 012.9 7.02c0 5.47-4.45 9.89-9.97 9.89zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.48.71.31 1.27.49 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34z" />
    </svg>
  </StyledLink>
);

export default WhatsApp;
