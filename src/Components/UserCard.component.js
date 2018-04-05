import React, { Component } from 'react';
import { Feed, Card } from 'semantic-ui-react';

export default class UserCardComponent extends Component {
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
      <Card>
        <Card.Content>
          <Card.Header>{this.props.username}</Card.Header>
          <Card.Meta>
            {this.props.server ? `S${this.props.server}` : ''}
          </Card.Meta>
          <Card.Description>
            <Feed>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary
                    content={`Your Current Stronghold level is  ${
                      this.props.shlevel
                    }`}
                  />
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary
                    content={`Your have ${parseInt(
                      this.props.gems,
                      10
                    ).toLocaleString()} Gems`}
                  />
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary
                    content={`Your have ${parseInt(
                      this.props.clancoins,
                      10
                    ).toLocaleString()} Clan Coins`}
                  />
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}
