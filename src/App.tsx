import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/GlobalStyles';
import { themes } from './style/theme';
import './App.css';
import './style/fonts.css';
import HomeView from './containers/Home';
import CameraView from './containers/Camera';

function App() {
  const [inCameraMode, setInCameraMode] = useState(false);

  const openCamera = () => setInCameraMode(true);
  const closeCamera = () => setInCameraMode(false);

  return (
    <ThemeProvider theme={themes['light']}>
      {inCameraMode ? (
        <CameraView closeCamera={closeCamera} />
      ) : (
        <HomeView openCamera={openCamera} />
      )}
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
