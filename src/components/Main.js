import axios from 'axios';
import React, { Component } from 'react';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      name: false,
    };

  };

  componentDidMount() {
    return axios.get('https://itunes.apple.com/search?term=jack+johnson').then(res => console.log(res));
  }

  render() {
    return <div>hello</div>
  }
}

export default Main;
