import React, { Component } from 'react';
import { Feed, Card, Divider } from 'semantic-ui-react';

export default class ClanCoinsCardComponent extends Component {
  render() {
    const generateEvents = () => {
      const clancoins = parseInt(this.props.clancoins, 10);
      if (!clancoins) {
        return;
      }
      const events = [];
      if (clancoins < 100000) {
        events.push(
          'You have less than 100,000 Clan Coins Please gather more before spending.'
        );
      } else if (clancoins < 200000) {
        events.push('You can buy 8 hours of Shield');
        events.push('Divider');
        events.push('You can buy 1 Friendly Teleport');
      } else if (clancoins < 300000) {
        events.push('You can buy 16 hours of Shield');
        events.push('Divider');
        events.push('You can buy 2 Friendly Teleports');
        events.push('Divider');
        events.push('You can Buy 15 hours of Speedup');
      } else {
        const shields = Math.floor(clancoins / 100000);
        events.push(
          `You Can Buy  ${this.calculateTimeString(shields * 480)} of Shield`
        );
        events.push('Divider');
        events.push(
          `You Can Buy  ${shields.toLocaleString()} Friendly Teleport(s)`
        );
        events.push('Divider');
        const aTps = Math.floor(clancoins / 300000);
        events.push(
          `You Can Buy  ${aTps.toLocaleString()} Advanced Teleport(s)`
        );
        events.push('Divider');
        const hrs = Math.floor(clancoins / 200000);
        events.push(
          `You Can Buy  ${this.calculateTimeString(hrs * 900)} of Speedup`
        );
      }
      return events.map((ev, i) => {
        if (ev === 'Divider') {
          return (
            <Divider key={i} horizontal>
              Or
            </Divider>
          );
        }
        return (
          <Feed.Event key={i}>
            <Feed.Content>
              <Feed.Summary content={ev} />
            </Feed.Content>
          </Feed.Event>
        );
      });
    };
    const clanCoinsContent = () => (
      <Card fluid>
        <Card.Content>
          <Card.Header>Clan Coins</Card.Header>
          <Card.Meta>Buying Options</Card.Meta>
          <Card.Description>
            <Feed>{generateEvents()}</Feed>
          </Card.Description>
        </Card.Content>
      </Card>
    );
    if (this.props.clancoins) {
      return clanCoinsContent();
    } else {
      return '';
    }
  }

  calculateTimeString(minutes) {
    const hours = Math.floor(minutes / 60);
    const finalMins = minutes % 60;
    const finalDays = Math.floor(hours / 24);
    const finalHours = hours % 24;
    return `${finalDays ? `${finalDays.toLocaleString()} day(s)` : ''} ${
      finalHours ? `${finalHours} hour(s)` : ''
    } ${finalMins ? `${finalMins} minute(s)` : ''}`;
  }
}
