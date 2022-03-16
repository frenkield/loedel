import React from 'react'
import Graph from '../graph/Graph'
import Axes from '../graph/Axes'
import Grid from '../graph/Grid'
import Lorentz from '../../math/Lorentz'

export default class LoedelDiagram extends React.Component {

    static defaultProps = {
        velocity: 0.3,
        centerX: 0.0,
        centerY: 0.0,
        colorGround: '#9C6E00',
        colorSky: '#3B739E'
    }

    lorentz = new Lorentz(this.props.velocity)

    render() {

        const {centerX, centerY, velocity, axesBalance, colorGround, colorSky,
               groundGridOpacity, skyGridOpacity} = this.props

        this.lorentz.setVelocity(velocity)

        const skewAngle = this.lorentz.getMedianAngle()

        const groundOpacity = Math.min(axesBalance * 2, 1)
        const adjustedGroundGridOpacity = groundGridOpacity * groundOpacity

        const skyOpacity = Math.min((1 - axesBalance) * 2, 1)
        const adjustedSkyGridOpacity = skyGridOpacity * skyOpacity

        return (

            <Graph className={this.props.className} centerX={centerX} centerY={centerY}>

                <Axes skewAngle={-skewAngle} color={colorGround} opacity={groundOpacity} />
                <Grid spacing={0.25} skewAngle={-skewAngle} color={colorGround} opacity={adjustedGroundGridOpacity} />

                <Axes skewAngle={skewAngle} color={colorSky} opacity={skyOpacity} />
                <Grid spacing={0.25} skewAngle={skewAngle} color={colorSky} opacity={adjustedSkyGridOpacity} />

            </Graph>
        )
    }
}
