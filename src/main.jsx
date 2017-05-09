import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import videojs from 'video.js';

class Main extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <nav className='navbar navbar-inverse'>
          <div className='navbar-header'>
            <Link to='/' className='navbar-brand'>
              <span>OverRank</span>
            </Link>
          </div>
        </nav>
        <div className='container-full fill'>
          {this.props.children}
        </div>
        <link href="//vjs.zencdn.net/5.4.6/video-js.min.css" rel="stylesheet"></link>
        <video id="example-vid" className="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" width="640" height="264" data-setup='{"example_option":true}'>
          <source src="rtmp://192.168.56.101:1935/vod/small.mp4" type="rtmp/mp4" />
        </video>
      </div>
    );
  }
}

export default Main;
