import React from 'react';
import ReactDOM from 'react-dom';

class Movies extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.genMovies();
    console.log('movies component mounted!');
  }

  genMovies() {
    console.log('generating movies');
  }

  render() {
    return (
      <div>
        <h2>My Movies</h2>
      </div>
    );
  }
}

export default Movies;
