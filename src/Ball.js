import React, { Component } from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './items.js'
// import { usePreview } from 'react-dnd-preview'
import { usePreview, Preview } from 'react-dnd-multi-backend'

// const MyPreview = () => {
//   const { display, itemType, item, style } = usePreview()
//   if (!display) {
//     return null
//   }
//   // render your preview
//   return <div>X</div>
// }

const MyPreview = () => {
  const { display, itemType, item, style } = usePreview()
  if (!display) {
    return null
  }
  return (
    <div class="item-list__item" style={style}>
      <div
        style={{
          opacity: '.5',
          margin: '20px',
          height: '200px',
          width: '200px',
          backgroundColor: 'red',
          borderRadius: '50%'
        }}
      ></div>
    </div>
  )
}

const Ball = props => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.BALL,
      id: props.id,
      hiddenColor: props.hiddenColor
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? '.5' : '1',
        margin: '20px',
        height: '200px',
        width: '200px',
        backgroundColor: props.hiddenColor,
        borderRadius: '50%'
      }}
    >
      {/* <MyPreview /> */}
      {/* <Preview> */}
        <MyPreview />
      {/* </Preview> */}
    </div>
  )
}

export default Ball
