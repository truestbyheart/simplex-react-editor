import React from 'react'
import propTypes from 'prop-types'

export default function imageUpload({ imageUploader }) {
  return (
    <ul className='editor__toolbar--img'>
      <li>
        <input
          type='file'
          name='file'
          id='file'
          className='file-uploader'
          onChange={imageUploader}
        />
        <label htmlFor='file'>
          <i className='far fa-image' />
        </label>
      </li>
    </ul>
  )
}

imageUpload.propTypes = {
  imageUploader: propTypes.func.isRequired
}
