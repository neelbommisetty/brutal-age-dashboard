import React, { Component } from 'react';
import { Feed, Card } from 'semantic-ui-react';

export default class UserResourcesComponent extends Component {
  render() {
    const resourcesContent = () => (
      <Card>
        <Card.Content>
          <Card.Header>Resources</Card.Header>
          <Card.Meta>Resources Summary</Card.Meta>
          <Card.Description>
            <Feed>
              {this.props.resources.Wood ? (
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary
                      content={`You have ${
                        this.props.resources.Wood.Total
                          ? this.props.resources.Wood.Total.toLocaleString()
                          : 0
                      } Wood`}
                    />
                  </Feed.Content>
                </Feed.Event>
              ) : (
                ''
              )}
              {this.props.resources.Meat ? (
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary
                      content={`You have ${
                        this.props.resources.Meat.Total
                          ? this.props.resources.Meat.Total.toLocaleString()
                          : 0
                      } Meat`}
                    />
                  </Feed.Content>
                </Feed.Event>
              ) : (
                ''
              )}
              {this.props.resources.Mana ? (
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary
                      content={`You have ${
                        this.props.resources.Mana.Total
                          ? this.props.resources.Mana.Total.toLocaleString()
                          : 0
                      } Mana`}
                    />
                  </Feed.Content>
                </Feed.Event>
              ) : (
                ''
              )}
              {this.props.resources.Stone ? (
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary
                      content={`You have ${
                        this.props.resources.Stone.Total
                          ? this.props.resources.Stone.Total.toLocaleString()
                          : 0
                      } Stone`}
                    />
                  </Feed.Content>
                </Feed.Event>
              ) : (
                ''
              )}
              {this.props.resources.Ivory ? (
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary
                      content={`You have ${
                        this.props.resources.Ivory.Total
                          ? this.props.resources.Ivory.Total.toLocaleString()
                          : 0
                      } Ivory`}
                    />
                  </Feed.Content>
                </Feed.Event>
              ) : (
                ''
              )}
            </Feed>
          </Card.Description>
        </Card.Content>
      </Card>
    );
    if (this.props.resources) {
      return resourcesContent();
    } else {
      return '';
    }
  }
}
