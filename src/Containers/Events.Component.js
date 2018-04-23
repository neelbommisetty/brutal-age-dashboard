import React, { Component } from 'react';
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
      <div className="google-calendar">
        <iframe
          title="calendar"
          src="https://calendar.google.com/calendar/embed?src=9rhi75tbrcms4l9836lcikn50g%40group.calendar.google.com"
          style={{ border: 0 }}
          width="100%"
          height="600"
        />
      </div>
    );
  }
}
