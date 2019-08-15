import React, { Component } from 'react';
import ORDERING from '../objects/ordering';

export class listOrdering extends Component {
  render() {
    let { onToggle } = this.props;
    onToggle = (value) => {
      this.props.onToggle(value);
    };
    return (
      <ul className="editor__toolbar--ordering">
        {ORDERING.map(order => (
          <li key={order.id}>
            <button onClick={() => onToggle(order.style)} type="button">
              <i className={order.icon} />
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default listOrdering;
