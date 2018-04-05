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
              {this.props.speedups.Healing ? (
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary
                      content={`You have ${this.calculateTimeString(
                        this.props.speedups.Healing['Total Minutes']
                      )} of Healing Speedup `}
                    />
                  </Feed.Content>
                </Feed.Event>
              ) : (
                ''
              )}
              {this.props.speedups.Building ? (
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary
                      content={`You have ${this.calculateTimeString(
                        this.props.speedups.Building['Total Minutes']
                      )} of  Building Speedups `}
                    />
                  </Feed.Content>
                </Feed.Event>
              ) : (
                ''
              )}
              {this.props.speedups.Training ? (
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary
                      content={`You have ${this.calculateTimeString(
                        this.props.speedups.Training['Total Minutes']
                      )} of Training Speedups `}
                    />
                  </Feed.Content>
                </Feed.Event>
              ) : (
                ''
              )}
              {this.props.speedups.Research ? (
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary
                      content={`You have ${this.calculateTimeString(
                        this.props.speedups.Research['Total Minutes']
                      )} of Research Speedups `}
                    />
                  </Feed.Content>
                </Feed.Event>
              ) : (
                ''
              )}
              {this.props.speedups.All ? (
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary
                      content={`You have ${this.calculateTimeString(
                        this.props.speedups.All['Total Minutes']
                      )} of All Speedups `}
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
    return `${finalDays ? `${finalDays} days` : ''} ${
      finalHours ? `${finalHours} hours` : ''
    } ${finalMins ? `${finalMins} minutes` : ''}`;
  }
}
