import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';
import './Header.component.css';

export default class HeaderComponent extends Component {
  clear = () => {
    localStorage.clear();
    window.location.reload();
  };
  render() {
    return (
      <header>
        <nav className="navbar">
          <Header className="heading" size="large">
            Brutal Age Calculator
          </Header>
          <Button onClick={this.clear} negative className="clear-button">
            Clear All Data
          </Button>
        </nav>
      </header>
    );
  }
}
