import React, { Component } from 'react';
import HeaderComponent from '../Components/Header.component';
import ResourcesComponent from './Resources.component';
import { Tab } from 'semantic-ui-react';
import SpeedupsComponent from './Speedups.component';

export default class HomeComponent extends Component {
  render() {
    const panes = [
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
      }
    ];
    return (
      <div>
        <HeaderComponent />
        {/*  */}
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </div>
    );
  }
}
