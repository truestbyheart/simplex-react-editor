import React, { Component } from 'react'
import propTypes from 'prop-types'
class headingDropdown extends Component {
  render() {
    let { active, onToggle, headerOptions } = this.props
    onToggle = (event) => {
      const { value } = event.target
      this.props.onToggle(value)
    }

    return (
      <div className='input-group input-heading'>
        <div className='input-group-prepend'>
          <label htmlFor='heading-selector' className='input-group-text'>
            <i className='fas fa-heading' />
          </label>
        </div>
        <select
          value={active}
          onChange={onToggle}
          className='custom-select heading'
          id='heading-selector'
        >
          <option value=''>Header Levels</option>
          {headerOptions.map((heading, index) => (
            <option value={heading.style} key={index}>
              {heading.label}
            </option>
          ))}
        </select>
        <div className='input-heading__text'>
          <ul>
            {headerOptions.map((heading, index) => (
              <li key={index}>
                <button onClick={event => onToggle(event)} value={heading.style}>{heading.label}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

headingDropdown.propTypes = {
  onToggle: propTypes.func.isRequired,
  headerOptions: propTypes.array.isRequired,
  active: propTypes.string.isRequired
}
export default headingDropdown
