import React from 'react';
import {
  EmailShareButton,
  TwitterShareButton,
  FacebookShareButton,
  EmailIcon,
  TwitterIcon,
  FacebookIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share';


class PastTrips extends React.Component {
  render() {
    return (
      <div>
        <EmailShareButton
          url='www.example.com'
          subject='Hard Coded title of shared page (trip)'
          body='message of shared trip'>
          <EmailIcon
            size={40}
            round />
        </EmailShareButton>
        <TwitterShareButton
          url='www.example.com'
          title='Hard Coded title of shared page (trip)'
          via='Trouvaille' >
          <TwitterIcon
            size={40}
            round />
        </TwitterShareButton>
        <FacebookShareButton
          url='www.example.com'
          quote='hello'>
          <FacebookIcon
            size={40}
            round />
        </FacebookShareButton>
        <RedditShareButton
          url='www.example.com'
          title='example title'>
          <RedditIcon
            size={40}
            round />
        </RedditShareButton>
      </div>
    )
  }
}

export default PastTrips;