import React, { Component } from 'react';
import { RichUtils } from 'draft-js';
import textStyling from '../objects/textstyling';

export class TextStyler extends Component {
  render() {
    const { editorState, updateState } = this.props;

    const applyStyle = style => {
      updateState(RichUtils.toggleInlineStyle(editorState, style));
    };
    return (
      <ul className='editor__toolbar--text'>
        {textStyling.map(style => (
          <li key={style.id}>
            <button onClick={() => applyStyle(style.style)} type='button'>
              <i className={style.icon} />
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default TextStyler;
