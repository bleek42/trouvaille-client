import React, { Component } from 'react'
import HamburgerIcon from './HamburberIcon/HamburgerIcon';

class NotFound extends Component {
  render() {
    return (
      <section>
        <HamburgerIcon />
        <h2>404 - Page not found</h2>
        <p>
          I know we said that spontaneity and unplanned wandering are the best things in life, but there is nothing here! Maybe you should head back to the previous page and try again.
        </p>
      </section>
    );
  }
}

export default NotFound;