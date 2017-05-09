import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  componentDidMount() {
    console.log('hello component mounted!');
  }

  onLike () {
    this.setState({likesCount: this.state.likesCount + 1});
  }

  render() {
    return (
      <div>
        <h1>Hello Bitches</h1>
        Likes: <span>{this.state.likesCount}</span>
        <br/>
        <Button className="btn btn-primary" onClick={this.onLike}>Click Me</Button>
      </div>
    );
  }

}

export default Hello;
