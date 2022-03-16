import React from 'react'
import Line from './Line'

export default class Axes extends React.Component {

    static defaultProps = {
        xMin: -5,
        xMax: 5,
        yMin: -5,
        yMax: 5,
        skewAngle: 0,
        centerX: 0,
        centerY: 0,
        strokeWidth: 4
    }

    render(props) {

        const {xMin, xMax, yMin, yMax, skewAngle, color, centerX, centerY, strokeWidth, opacity} = this.props
        const transform = 'translate(' + centerX + ',' + -centerY + ')' // rotate(10)'

        return (
            <g transform={transform}>

                <Line x1={xMin} y1={0} x2={xMax} y2={0} color={color} angle={-skewAngle} strokeWidth={strokeWidth}
                      strokeOpacity={opacity} />

                <Line x1={0} y1={yMin} x2={0} y2={yMax} color={color} angle={skewAngle} strokeWidth={strokeWidth}
                      strokeOpacity={opacity} />
            </g>
        )
    }
}
