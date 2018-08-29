import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Components as PCFComponents } from 'platform-common-frontend';
import { MemoryRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  myHeaderLinks = [
    {
      'to': '/home',
      'heading': 'Home'
    },
    {
      'to': '/article',
      'heading': 'Article'
    }
  ]
  myFooterLinks = [
    {
      'to': '/contact',
      'heading': 'Contact us'
    },
    {
      'to': '/copy',
      'heading': 'Copyright'
    }
  ]
  render() {
    return (


      <BrowserRouter>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">

              <div className="App">
                <PCFComponents.GovUkHeader title="" navigation={this.myHeaderLinks} />
                <PCFComponents.GovUkFooter footerNavigation={this.myFooterLinks} />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
