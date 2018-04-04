import React, { Component } from 'react';
import { Feed, Card } from 'semantic-ui-react';
var converter = require('number-to-words');

export default class UserResourcesComponent extends Component {
  render() {
    const resourcesContent = () => (
      <Card>
        <Card.Content>
          <Card.Header>Resources</Card.Header>
          <Card.Meta>Resources Summary</Card.Meta>
          <Card.Description>
            <Feed>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary
                    content={`You have ${converter.toWords(
                      this.props.resources.Wood.Total
                    )} Wood`}
                  />
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary
                    content={`You have ${converter.toWords(
                      this.props.resources.Meat.Total
                    )} Meat`}
                  />
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary
                    content={`You have ${converter.toWords(
                      this.props.resources.Mana.Total
                    )} Mana`}
                  />
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary
                    content={`You have ${converter.toWords(
                      this.props.resources.Stone.Total
                    )} Stone`}
                  />
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary
                    content={`You have ${converter.toWords(
                      this.props.resources.Ivory.Total
                    )} Ivory`}
                  />
                </Feed.Content>
              </Feed.Event>
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
