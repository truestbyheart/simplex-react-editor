import React from 'react'

let imageIdIncremental = 0
const Image = ({ src }) => {
  if (src) {
    return (
      <div className='captioned-image'>
        <img
          className='captioned-img'
          src={src}
          alt='jpg'
          id={`image-${imageIdIncremental++}`}
          onClick={e => captioner(e)}
        />
        <input type='text' value='image caption' id={imageIdIncremental} readOnly='true' />
      </div>
    )
  }
  return null
}

const captioner = e => {
  console.log(e.target.nextSibling.id)
  const inputId = e.target.nextSibling.id
  const inputField = document.getElementById(inputId)
  inputField.readOnly = false
  inputField.focus()
}

const Media = props => {
  const entity = props.contentState.getEntity(props.block.getEntityAt(0))
  const { src } = entity.getData()
  const type = entity.getType()

  let media

  if (type === 'image') {
    media = <Image src={src} />
  }

  return media
}

export default block => {
  if (block.getType() === 'atomic') {
    return {
      component: Media,
      editable: false
    }
  }

  return null
}
