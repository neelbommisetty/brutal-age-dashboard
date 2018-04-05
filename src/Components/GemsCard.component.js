import React, { Component } from 'react';
import { Feed, Card, Divider } from 'semantic-ui-react';

export default class GemsCardComponent extends Component {
  componentDidCatch(error, errorInfo) {
    // this.setState({ error });
    if (window.raven) {
      window.Raven.captureException(error, {
        extra: errorInfo
      });
    }
  }
  render() {
    const generateEvents = () => {
      const gems = parseInt(this.props.gems, 10);
      if (!gems) {
        return;
      }
      const events = [];
      if (gems < 250) {
        events.push(
          'You have less than 250 Gems Please Get More Before Spending'
        );
      } else if (gems < 500) {
        const consMaster = Math.floor(gems / 250);
        events.push(
          `You can buy ${consMaster * 2} days of Construction Master`
        );
        events.push('Divider');
        const skullPiles = Math.floor(gems / 15);
        events.push(`You can buy ${skullPiles.toLocaleString()} Skull Piles`);
      } else if (gems < 1000) {
        events.push('You can buy 1 Golden Magic Turtle');
        events.push('Divider');
        events.push('You can buy 1 Friendly Teleport');
        events.push('Divider');
        const sheild8 = Math.floor(gems / 500);
        events.push(
          `You Can Buy ${this.this.calculateTimeString(
            sheild8 * 480
          )} of Shields`
        );
        events.push('Divider');
        const consMaster = Math.floor(gems / 250);
        events.push(
          `You can buy ${consMaster * 2} days of Construction Master`
        );
        events.push('Divider');
        const skullPiles = Math.floor(gems / 15);
        events.push(`You can buy ${skullPiles.toLocaleString()} Skull Piles`);
      } else if (gems < 1500) {
        const turtles = Math.floor(gems / 500);
        events.push(
          `You can buy ${turtles.toLocaleString()} Golden Magic Turtles`
        );
        events.push('Divider');
        events.push(
          `You can buy ${turtles.toLocaleString()} Friendly Teleports`
        );
        events.push('Divider');
        const sheild1 = Math.floor(gems / 1000);
        events.push(`You can buy ${sheild1.toLocaleString()} day(s) of Shield`);
        events.push('Divider');
        const hrs8 = Math.floor(gems / 650);
        events.push(
          `You can buy ${this.calculateTimeString(hrs8 * 480)} of Speedup`
        );
        events.push('Divider');
        const consMaster = Math.floor(gems / 250);
        events.push(
          `You can buy ${consMaster * 2} days of Construction Master`
        );
      } else if (gems < 2500) {
        const turtles = Math.floor(gems / 500);
        events.push(
          `You can buy ${turtles.toLocaleString()} Golden Magic Turtles`
        );
        events.push('Divider');
        const aTps = Math.floor(gems / 1500);
        events.push(
          `You can buy ${aTps.toLocaleString()} Advanced Teleport(s)`
        );
        events.push('Divider');
        const consMaster = Math.floor(gems / 250);
        events.push(
          `You can buy ${consMaster * 2} days of Construction Master`
        );
        events.push('Divider');
        const sheild1 = Math.floor(gems / 1000);
        events.push(`You can buy ${sheild1.toLocaleString()} day(s) of Shield`);
        events.push('Divider');
        const day1 = Math.floor(gems / 1500);
        events.push(`You can buy ${day1.toLocaleString()} day(s) of Speedup`);
      } else {
        const turtles = Math.floor(gems / 500);
        events.push(
          `You can buy ${turtles.toLocaleString()} Golden Magic Turtles`
        );
        events.push('Divider');
        const day1 = Math.floor(gems / 1500);
        events.push(`You can buy ${day1.toLocaleString()} day(s) of Speedup`);
        events.push('Divider');
        const sheild3 = Math.floor(gems / 2500);
        events.push(
          `You can buy ${(sheild3 * 3).toLocaleString()} days of Shield`
        );
        events.push('Divider');
        if (gems > 3500) {
          const res = Math.floor(gems / 3300);
          events.push(
            `You can buy ${(
              res * 1.5
            ).toLocaleString()} Million Wood/Stone/Ivory`
          );
          events.push('Divider');
          events.push(`You can buy ${(res * 6).toLocaleString()} Million Meat`);
          events.push('Divider');
          events.push(
            `You can buy ${(res * 600 / 1000).toLocaleString()} Million Mana`
          );
        } else {
          const consMaster = Math.floor(gems / 250);
          events.push(
            `You can buy ${consMaster * 2} days of Construction Master`
          );
        }
        events.push('Divider');
        const aTps = Math.floor(gems / 1500);
        events.push(
          `You can buy ${aTps.toLocaleString()} Advanced Teleport(s)`
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
    const gemsContent = () => (
      <Card fluid>
        <Card.Content>
          <Card.Header>Gems</Card.Header>
          <Card.Meta>Buying Options</Card.Meta>
          <Card.Description>
            <Feed>{generateEvents()}</Feed>
          </Card.Description>
        </Card.Content>
      </Card>
    );
    if (this.props.gems) {
      return gemsContent();
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
