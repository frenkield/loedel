import React from 'react'

export default class Line extends React.Component {

    static defaultProps = {
        color: 'black',
        strokeWidth: 4,
        angle: 0
    }

    render() {

        const {x1, y1, x2, y2, color, strokeWidth, angle, strokeOpacity} = this.props

        const angleInDegrees = angle * 180 / Math.PI

        const transform = 'rotate(' + angleInDegrees + ')'

        return (
            <line transform={transform} x1={x1} y1={-y1} x2={x2} y2={-y2} stroke={color}
                  strokeWidth={strokeWidth} strokeOpacity={strokeOpacity} vectorEffect="non-scaling-stroke" />
        )
    }
}
