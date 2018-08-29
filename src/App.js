import React, { Component } from 'react';
import Header from './components/common/header/header'
import Footer from './components/common/footer/footer'
import Main from './components/Main'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
