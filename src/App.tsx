import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themes } from './styles/theme';
import './App.css';
import './styles/fonts.css';
import Layout from './components/Layout';

function App() {
  return (
    <ThemeProvider theme={themes['light']}>
      <Router>
        <Layout />
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
