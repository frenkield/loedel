import React from 'react'
import Axes from './Axes'

export default class Grid extends React.Component {

    static defaultProps = {
        spacing: 0.25,
        color: 'black',
        skewAngle: 0,
        opacity: 1,
        size: 1.8
    }

    render(props) {

        const {spacing, color, skewAngle, opacity, size} = this.props

        const rotation = skewAngle > 0 ? -1 : 1
        const skewSpacing = Math.abs(Math.sin(rotation * skewAngle) + Math.cos(skewAngle)) * spacing

        if (skewSpacing < 0.01) {
            return(null)
        }

        const axes = []
        let totalSkewSpacing = skewSpacing
        let key = 0

        while (totalSkewSpacing < size) {

            axes.push(<Axes color={color} skewAngle={skewAngle} opacity={opacity}
                            centerX={rotation * totalSkewSpacing} centerY={totalSkewSpacing}
                            strokeWidth={1} key={key++} />)

            axes.push(<Axes color={color} skewAngle={skewAngle} opacity={opacity}
                            centerX={rotation * -totalSkewSpacing} centerY={-totalSkewSpacing}
                            strokeWidth={1} key={key++} />)

            totalSkewSpacing += skewSpacing

            if (skewSpacing < 0.03) {
                totalSkewSpacing += skewSpacing
            }
        }

        return (
            <g opacity={opacity}>
                {axes}
            </g>
        )
    }
}
