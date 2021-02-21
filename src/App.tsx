import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/GlobalStyles';
import { themes } from './style/theme';
import './App.css';
import './style/fonts.css';
import HomeView from './containers/Home';
import CameraView from './containers/Camera';
import img from './images/idcard.png';

export enum Status {
  Approved = 'APPROVED',
  Rejected = 'REJECTED',
  LowLight = 'LOW_LIGHT',
  PictureTaken = 'PICTURE_TAKEN',
  Initial = 'Initial',
}

function App() {
  const [status, setStatus] = useState(Status.Initial);
  const [image] = useState(img);

  const changeStatus = (status: Status) => setStatus(status);

  return (
    <ThemeProvider theme={themes['light']}>
      {status === Status.PictureTaken || status === Status.LowLight ? (
        <CameraView changeStatus={changeStatus} status={status} image={image} />
      ) : (
        <HomeView changeStatus={changeStatus} status={status} image={image} />
      )}
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
