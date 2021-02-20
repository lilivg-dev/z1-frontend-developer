import styled from 'styled-components';

export const Container = styled.button`
  position: relative;
  z-index: 1;
  padding: 1rem 1.6rem;
  font-size: var(--bodyFontSize);
  font-weight: bold;
  text-decoration: none;
  color: ${({theme}) => theme.fonts.fontLightColor};
  background-color: ${({theme}) => theme.colors.brandColor};
  border: none;
  border-radius: 24px;
  box-shadow: 0 10px 20px -5px rgba(47,0,121,0.3);
  cursor: pointer;
`