import React, { Component } from 'react';
import { Components as PCFComponents } from 'platform-common-frontend';
class Header extends Component {
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
    render() {
        return (
            <PCFComponents.GovUkHeader title="" navigation={this.myHeaderLinks} />
        );
    }
}

export default Header
