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
            <Link to='/stream' className='navbar-brand'>
              <span>Stream</span>
            </Link>
          </div>
        </nav>
        <div className='container-full fill'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Main;
