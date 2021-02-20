import styled from 'styled-components';
import {ReactComponent as SVG} from '../../images/IDbg.svg';

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 4rem;;

  h1 {
    margin-bottom: 1rem;
    font-size: var(--titleFontSize);
    line-height: ${({theme}) => theme.fonts.lineHeight};
    color: ${({theme}) => theme.fonts.fontDarkColor};
  }

  p {
    margin-bottom: 1rem;
    font-size: var(--bodyFontSize);
    line-height: ${({theme}) => theme.fonts.lineHeight};
    text-align: center;
    color: ${({theme}) => theme.fonts.fontDarkColor};
  }
`

export const EmptyCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  width: 260px;
  border-radius: 12px;
  box-shadow: 0 10px 20px -6px rgba(0,0,0,0.15);
`

export const IDbg = styled(SVG)`
  position: absolute;
  z-index: 0;
`