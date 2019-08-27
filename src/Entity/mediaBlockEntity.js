import React from 'react'

// eslint-disable-next-line react/prop-types
export const findImageEntities = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity()
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === 'IMAGE'
      )
    },
    callback
  )
}
export const UpdateImage = (props) => {
  const { src } = props.contentState.getEntity(props.entityKey).getData()
  return (
    <img src={src} />
  )
}

export default block => {
  if (block.getType() === 'IMAGE') {
    return {
      component: UpdateImage,
      editable: false
    }
  }

  return null
}
