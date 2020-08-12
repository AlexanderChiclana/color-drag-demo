import React, { Component, useState } from 'react';
import { useDrop } from 'react-dnd'
import { ItemTypes } from './items';

const Bucket = (props) => {

    const [background, setBackground] = useState('white')

    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.BALL,
        drop: (item, monitor) => setBackground(item.hiddenColor),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })

    return ( 
        <div 
        ref={drop}
        style={{
            backgroundColor: isOver ? 'gray' : background,
            height: '100%',
            width: '100%',
            border: '1px solid black'
        }}>
            {props.children}
        </div>
     );
}
 
export default Bucket;

