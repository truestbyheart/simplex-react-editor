import React, { Component } from 'react';

import SimplexEditor from 'simple-react-editor';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      body: {}
    };
  }

  getBodyContent = value => {
    this.setState({ body: value });
  };

  render() {
    console.log(this.state);
    return (
      <div className='container'>
        <label htmlFor='editor'>Simplex Editor</label>
        <SimplexEditor getArticle={this.getBodyContent} />
      </div>
    );
  }
}
