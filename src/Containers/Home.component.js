import React, { Component } from 'react';
import HeaderComponent from '../Components/Header.component';
import ResourcesComponent from './Resources.component';
import { Tab, Container } from 'semantic-ui-react';
import SpeedupsComponent from './Speedups.component';
import OthersComponent from './Others.component';
import OverviewComponent from './Overview.component';
import EventsComponent from './Events.Component';
import './home.css';

export default class HomeComponent extends Component {
  componentDidCatch(error, errorInfo) {
    // this.setState({ error });
    if (window.raven) {
      window.Raven.captureException(error, {
        extra: errorInfo
      });
    }
  }

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
        menuItem: 'Events Calendar',
        render: () => (
          <Tab.Pane>
            <EventsComponent />
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
        <Tab
          menu={{
            borderless: true,
            attached: false,
            tabular: false,
            secondary: true
          }}
          grid={{ paneWidth: 12, tabWidth: 3 }}
          panes={panes}
        />
      </Container>
    );
  }
}
