import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {GlobalStyles,theme} from './globalStyles';
import { ThemeProvider } from 'styled-components';
import Main from './pages/main'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Router>
        <Switch>
          <Route path="/">
              <Main/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
