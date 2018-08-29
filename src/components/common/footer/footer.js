import React, { Component } from 'react';
import { Components as PCFComponents } from 'platform-common-frontend';
class Footer extends Component {
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
            <PCFComponents.GovUkFooter title="" navigation={this.myFooterLinks} />
        );
    }
}

export default Footer
