import React from 'react'
import { ItemTypes } from './Contains'
import { useDrag, useDrop } from 'react-dnd'

export default function Lesson(props) {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.KNIGHT },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })
    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: "0.8rem",
                fontWeight: 'bold',
                cursor: 'move',
                color: "white",
                width: "auto"
            }}
        >
            {props.data[0]}
        </div>
    )
}
