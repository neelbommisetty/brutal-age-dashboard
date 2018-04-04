import React, { Component } from 'react';
import { Feed, Card } from 'semantic-ui-react';

export default class UserSpeedupsComponent extends Component {
  render() {
    const speedupsContent = () => (
      <Card>
        <Card.Content>
          <Card.Header>Speedups</Card.Header>
          <Card.Meta>Speedups Summary</Card.Meta>
          <Card.Description>
            <Feed>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary
                    content={`You have ${this.calculateTimeString(
                      this.props.speedups.Healing['Total Minutes']
                    )} Healing Speedup `}
                  />
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary
                    content={`You have ${this.calculateTimeString(
                      this.props.speedups.Building['Total Minutes']
                    )} Building Speedups `}
                  />
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary
                    content={`You have ${this.calculateTimeString(
                      this.props.speedups.Training['Total Minutes']
                    )} Training Speedups `}
                  />
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary
                    content={`You have ${this.calculateTimeString(
                      this.props.speedups.Research['Total Minutes']
                    )} Research Speedups `}
                  />
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary
                    content={`You have ${this.calculateTimeString(
                      this.props.speedups.All['Total Minutes']
                    )} All Speedups `}
                  />
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Description>
        </Card.Content>
      </Card>
    );
    if (this.props.speedups) {
      return speedupsContent();
    } else {
      return '';
    }
  }
  calculateTimeString(minutes) {
    const hours = Math.floor(minutes / 60);
    const finalMins = minutes % 60;
    const finalDays = Math.floor(hours / 24);
    const finalHours = hours % 24;
    return `${finalDays} Days ${finalHours} Hours ${finalMins} Minutes`;
  }
}
