import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

export default class OthersComponent extends Component {
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
          <Message.Header>Partners </Message.Header>
          <div>
            <a
              href="https://www.facebook.com/sean.barry.376"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sean Barry
            </a>
            &nbsp;has a very good guide about Partners System and Partner
            Strategies.Please&nbsp;
            <a
              href="https://seanbarry007.wixsite.com/baguide"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here
            </a>
            &nbsp;to check it out.
          </div>
        </Message>
        <Message>
          <Message.Header>Brutal Scientist Blog</Message.Header>
          This blog has some interesting tips about the game.&nbsp;
          <a
            href="http://brutalscientist.blogspot.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here
          </a>
          &nbsp;to check out the blog.
        </Message>
        <Message>
          <Message.Header>Wiki</Message.Header>
          <a
            href="http://brutalage.wikia.com/wiki/Brutal_Age:_Horde_Invasion"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here
          </a>
          &nbsp;to go the Wiki Page.
        </Message>
      </div>
    );
  }
}
