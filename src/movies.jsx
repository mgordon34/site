import React from 'react';
import ReactDOM from 'react-dom';

class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {movies: []};
  }

  componentDidMount() {
    this.genMovies();
    console.log('movies component mounted!');
  }

  async genMovies() {
    console.log('generating movies');
    // fetch('http://192.168.56.101:8001/api/movies')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     console.log(responseJson.movies);
    //     this.setState({ movies: responseJson.movies });
    //   });
    let response = await fetch('http://192.168.56.101:8001/api/movies');
    let responseJson = await response.json();
    var movies = responseJson.movies;
    var list = document.getElementById('movies');
    for (var i = 0; i < movies.length; i++) {
      var m = document.createElement("a");
      m.className = "list-group-item list-group-item-action movie";
      m.href= 'movies/' + movies[i];
      m.innerHTML = movies[i];
      list.appendChild(m);
    }
  }

  render() {
    return (
      <div>
        <h2>My Movies</h2>
        <div id='movies' className="list-group col-md-4">
        </div>
      </div>
    );
  }
}

export default Movies;
