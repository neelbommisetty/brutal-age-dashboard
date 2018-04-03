import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

export default class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <nav>
          <Grid>
            <Grid.Column width={10}>
              <h1>Brutal Age Dashboard</h1>
            </Grid.Column>
            <Grid.Column>Home</Grid.Column>
            <Grid.Column>Runes</Grid.Column>
          </Grid>
        </nav>
      </header>
    );
  }
}
