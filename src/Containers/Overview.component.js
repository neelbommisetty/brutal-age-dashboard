import React, { Component } from 'react';
import UserFormComponent from '../Components/UserForm.component';
import UserCardComponent from '../Components/UserCard.component';
import UserResourcesComponent from '../Components/UserResources.component';
import UserSpeedupsComponent from '../Components/UserSpeedups.component';
import ClanCoinsCardComponent from '../Components/ClanCoinsCard.component';
import GemsCardComponent from '../Components/GemsCard.component';
import { getDataFromLocalStorage, setDataToLocalStorage } from '../metadata';
import { Card, Header } from 'semantic-ui-react';

export default class OverviewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      server: '',
      shlevel: 1,
      gems: 0,
      clancoins: 0
    };
  }

  componentWillMount() {
    const userData = getDataFromLocalStorage('user');
    const resources = getDataFromLocalStorage('resources');
    const speedups = getDataFromLocalStorage('speedups');
    this.setState({
      ...userData,
      resources,
      speedups
    });
  }

  componentDidCatch(error, errorInfo) {
    // this.setState({ error });
    if (window.raven) {
      window.Raven.captureException(error, {
        extra: errorInfo
      });
    }
  }

  render() {
    return (
      <div>
        <UserFormComponent
          saveUser={this.saveUser.bind(this)}
          {...this.state}
        />
        <Header as="h1">User Summary </Header>
        <Card.Group itemsPerRow={3} stackable>
          <UserCardComponent {...this.state} />
          <UserResourcesComponent {...this.state} />
          <UserSpeedupsComponent {...this.state} />
        </Card.Group>
        <ClanCoinsCardComponent {...this.state} />
        <GemsCardComponent {...this.state} />
      </div>
    );
  }

  saveUser(userData) {
    setDataToLocalStorage('user', Object.assign({}, this.state, userData));
    this.setState(userData);
  }
}
