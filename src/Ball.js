import React, { Component } from 'react'
import { useDrag } from 'react-dnd';
import { ItemTypes } from './items.js'

const Ball = (props) => {

    const [{isDragging}, drag] = useDrag({
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
    ></div>
  )
}

export default Ball
