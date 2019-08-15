import React, { Component } from 'react';
import ALIGNMENT from '../objects/alignment';

export class alignment extends Component {
  render() {
    let { onToggle } = this.props;
    onToggle = (value) => {
      this.props.onToggle(value);
    };
    return (
      <ul className="editor__toolbar--alignment">
        {ALIGNMENT.map(order => (
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

export default alignment;
