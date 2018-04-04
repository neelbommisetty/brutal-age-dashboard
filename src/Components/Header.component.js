import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import './Header.component.css';

export default class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <nav>
          <Header className="heading" size="large">
            Brutal Age Calculator
          </Header>
        </nav>
      </header>
    );
  }
}
