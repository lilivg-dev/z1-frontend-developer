import styled from 'styled-components';
import { from } from '../../style/media'
import img from '../../images/bgimg.jpg'
import table from '../../images/table.jpg'
import { Status } from '../../App';

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 4rem;
  background-image: url(${img});
  background-position: -656px 0px;
  background-repeat: no-repeat;
  ${from.mobile} {
    background-position: initial;
    background-repeat: no-repeat;
  }
  ${from.tablet} {
    background-position: initial;
    background-repeat: no-repeat;
  }
  ${from.laptop} {
    background-size: cover;
    background-repeat: no-repeat;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: var(--titleFontSize);
    line-height: ${({theme}) => theme.fonts.lineHeight};
    color: ${({theme}) => theme.fonts.fontLightColor};
  }

  p {
    margin-bottom: 4rem;
    font-size: var(--bodyFontSize);
    line-height: ${({theme}) => theme.fonts.lineHeight};
    text-align: center;
    color: ${({theme}) => theme.fonts.fontLightColor};
  }
`

export const CameraCard = styled.div<{status: Status}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  width: 260px;
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 20px -6px rgba(0,0,0,0.15);
  background-image: url(${table});
  background-repeat: no-repeat;
  background-size: cover;
  border: ${(props) => props.status === Status.Initial ? '2px solid #69CC8B' : 'none'};

  img {
    width: 85%;
  }
`

export const Message = styled.p`
  margin-bottom: 8rem;
  font-size: var(--bodyFontSize);
  line-height: ${({theme}) => theme.fonts.lineHeight};
  text-align: center;
  color: ${({theme}) => theme.fonts.fontLightColor};
`
export const Check = styled.i`
  color: #69CC8B;
`

export const LightBulb = styled.i`
  color: #FAB72D;
`

export const CancelBtn = styled.button`
  font-size: var(--bodyFontSize);
  font-weight: bold;
  line-height: ${({theme}) => theme.fonts.lineHeight};
  color: ${({theme}) => theme.fonts.fontLightColor};
  background-color: transparent;
  border: none;
  cursor: pointer;
`