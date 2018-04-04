import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

export default class OthersComponent extends Component {
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
            &nbsp;Has a Very Good Guide About Partners And Strategies. Please
            &nbsp;
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
          <Message.Header>Wiki</Message.Header>
          <a
            href="http://brutalage.wikia.com/wiki/Brutal_Age:_Horde_Invasion"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here
          </a>
          &nbsp;to Check out the Wiki
        </Message>
        <Message>
          <Message.Header>Brutal Scientist Blog</Message.Header>
          <a
            href="http://brutalscientist.blogspot.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here
          </a>
          &nbsp;to Check out the Blog. It Has Some interesting tips about the
          game.
        </Message>
      </div>
    );
  }
}
