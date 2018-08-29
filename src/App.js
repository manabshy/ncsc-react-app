import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Components as PCFComponents} from 'platform-common-frontend';
import { MemoryRouter } from 'react-router';
class App extends Component {
  render() {
    return (
      <MemoryRouter initialEntries={["/"]}>
      <PCFComponents.GovUkAppWrapper>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </PCFComponents.GovUkAppWrapper>
      </MemoryRouter>
    );
  }
}

export default App;
