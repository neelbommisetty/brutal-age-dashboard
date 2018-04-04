import React, { Component } from 'react';
import { Form, Header } from 'semantic-ui-react';

export default class UserFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { username: props.username, server: props.server };
  }

  handleChange = (e, { name, value }) => {
    this.props.saveUser(Object.assign({}, this.state, { [name]: value }));
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Header as="h1">User Details</Header>
        <Form>
          <Form.Group unstackable widths="2">
            <Form.Input
              placeholder="Eg. Coololzz"
              name="username"
              label="Username"
              value={this.props.username}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder="Eg. 233"
              name="server"
              label="Server"
              value={this.props.server}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder="Eg. 20"
              name="shlevel"
              label="Stronghold Level"
              value={this.props.shlevel}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder="Eg. 2500"
              name="gems"
              label="Gems"
              value={this.props.gems}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder="Eg. 233000"
              name="clancoins"
              label="Clan Coins"
              value={this.props.clancoins}
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
