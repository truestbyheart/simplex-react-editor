import React, { Component } from 'react';

import SimplexEditor from 'simple-react-editor';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      body: {},
      editableBody: ''
    };
  }

  getBodyContent = value => {
    this.setState({ body: value });
  };

  getUpdatedData = value => {
    this.setState({editableBody: value})
  }
  htmlBody = `
  <h1>Hello World</h1>
  <p>We choose to fight because you need to be recognized</p>
  `

  render() {
    return (
      <div className='container'>
        <label htmlFor='editor'>Simplex Editor</label>
        <SimplexEditor getArticle={this.getBodyContent} />
        <br/> <br/>
        <label htmlFor='editor'>Simplex Editor: with initial content</label>
        <SimplexEditor getArticle={this.getUpdatedData} content={this.htmlBody}/>
      </div>
    );
  }
}
