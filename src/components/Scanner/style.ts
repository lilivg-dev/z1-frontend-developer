import styled from 'styled-components';

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
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  width: 260px;
  border-radius: 12px;
  box-shadow: 0 10px 20px -6px rgba(0,0,0,0.15);
`

export const ApCard = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  width: 260px;
  border: 2px solid #69CC8B;
  border-radius: 12px;
  box-shadow: 0 10px 20px -6px rgba(0,0,0,0.15);
`

export const ApStatus = styled.span`
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 22px;
  transform: translateY(50%);
  padding: 9px 8px;
  font-size: var(--smallFontSize);
  font-weight: bold;
  text-align: center;
  color: ${({theme}) => theme.fonts.fontLightColor};
  background-color: #69CC8B;
  border-radius: 4px;
`

export const Check = styled.i`
  font-size: var(--smallFontSize);
  color: ${({theme}) => theme.fonts.fontLightColor};
`

export const RjCard = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  width: 260px;
  border: 2px solid #C00000;
  border-radius: 12px;
  box-shadow: 0 10px 20px -6px rgba(0,0,0,0.15);
`

export const RjStatus = styled.span`
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 22px;
  transform: translateY(50%);
  padding: 9px 8px;
  font-size: var(--smallFontSize);
  font-weight: bold;
  text-align: center;
  color: ${({theme}) => theme.fonts.fontLightColor};
  background-color: #C00000;
  border-radius: 4px;
`

export const Times = styled.i`
  font-size: var(--smallFontSize);
  color: ${({theme}) => theme.fonts.fontLightColor};
`

export const IMG = styled.img`
  width: 99%;
`