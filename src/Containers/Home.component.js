import React, { Component } from 'react';
import HeaderComponent from '../Components/Header.component';
import ResourcesComponent from './Resources.component';
import { Tab, Container } from 'semantic-ui-react';
import SpeedupsComponent from './Speedups.component';
import OthersComponent from './Others.component';
import OverviewComponent from './Overview.component';

export default class HomeComponent extends Component {
  render() {
    const panes = [
      {
        menuItem: 'Overview',
        render: () => (
          <Tab.Pane>
            <OverviewComponent />
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Resources',
        render: () => (
          <Tab.Pane>
            <ResourcesComponent />
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Speedups',
        render: () => (
          <Tab.Pane>
            <SpeedupsComponent />
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Useful Links',
        render: () => (
          <Tab.Pane>
            <OthersComponent />
          </Tab.Pane>
        )
      }
    ];
    return (
      <Container>
        <HeaderComponent />
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </Container>
    );
  }
}
