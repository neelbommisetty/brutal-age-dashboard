import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';
import './events.css';

export default class EventsComponent extends Component {
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
        <Message>
          <Message.Header>Daylight Savings</Message.Header>
          The events might be off by 1 hour for few timezones especially in
          countries that do not Observe day light savings like India/China Etc.
        </Message>
        <Message>
          <Message.Header>Credits</Message.Header>
          All the Events data is gathered by{' '}
          <a
            href="https://www.facebook.com/momattheword"
            rel="noopener noreferrer"
            target="_blank"
          >
            Matthew Ord.
          </a>
          &nbsp;All Credit Goes to him.
        </Message>
        {/* <iframe src="https://calendar.google.com/calendar/embed?showNav=0&amp;showPrint=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=9rhi75tbrcms4l9836lcikn50g%40group.calendar.google.com&amp;color=%23B1440E&amp;ctz=Asia%2FCalcutta" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe> */}
        <div className="google-calendar">
          <iframe
            title="calendar"
            src="https://calendar.google.com/calendar/embed?src=9rhi75tbrcms4l9836lcikn50g%40group.calendar.google.com&amp;showNav=0&amp;showPrint=0&amp;showCalendars=0&amp;mode=AGENDA"
            style={{ border: 0 }}
            width="100%"
            height="600"
          />
        </div>
      </div>
    );
  }
}
