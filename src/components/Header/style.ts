import styled from 'styled-components';

export const Container = styled.header `
  height: 80px;
  padding: 2rem 2rem;
  border-bottom: 1px solid rgba(47,0,121,0.1);

  h2 {
    font-size: var(--titleFontSize);
    font-style: italic;
    line-height: ${({theme}) => theme.fonts.lineHeight};
    color: ${({theme}) => theme.colors.brandColor};
  }
`