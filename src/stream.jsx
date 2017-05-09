import React from 'react';
import ReactDOM from 'react-dom';
import videojs from 'video.js';

class Stream extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.player = videojs("myvideo");
    console.log('stream component mounted!');
  }

  componentWillUnmount() {
    this.player.dispose();
  }

  render() {
    return (
      <div>
        <div className="video-container">
          <link href="//vjs.zencdn.net/5.4.6/video-js.min.css" rel="stylesheet"></link>
          <video id="myvideo" className="video-js vjs-default-skin" controls autoPlay preload="auto" data-setup='{ "asdf": true }'>
            <source src="rtmp://192.168.56.101:1935/vod/small.mp4" type="rtmp/mp4"/>
          </video>
        </div>
      </div>
    );
  }
}

export default Stream;
