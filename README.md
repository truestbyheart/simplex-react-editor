# simple-react-editor

> A simple stackoverflow inspired editor.

[![NPM](https://img.shields.io/npm/v/simple-react-editor.svg)](https://www.npmjs.com/package/simple-react-editor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-react-editor
```

## Usage

```jsx
import React, { Component } from 'react';

import SimplexEditor from 'simple-react-editor';

class Example extends Component {
  addArticleToState = value => {
    this.setState({ article: value });
  };
  render() {
    return <SimplexEditor getArticle={this.AddArticleToState} />;
  }
}
```

## Update functionality
if you want to insert html content into the editor for editing purpose

```jsx
import React, { Component } from 'react';

import SimplexEditor from 'simple-react-editor';

class Example extends Component {
  addArticleToState = value => {
    this.setState({ article: value });
  };

  htmlBody = `
  <h1>Hello World</h1>
  <p>We choose to fight because you need to be recognized</p>
  `

  render() {
    return <SimplexEditor getArticle={this.AddArticleToState} content={this.htmlBody}/>;
  }
}
```

## License

MIT © [truestbyheart](https://github.com/truestbyheart)
