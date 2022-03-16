import React from 'react'
import Graph from '../graph/Graph'
import Axes from '../graph/Axes'
import Grid from '../graph/Grid'

export default class MinkowskiDiagram extends React.Component {

    static defaultProps = {
        centerX: 0.5,
        centerY: 0.5
    }

    render() {

        const {centerX, centerY} = this.props

        return (

            <Graph className={this.props.className} centerX={centerX} centerY={centerY}>

                <Axes color="green" />
                <Axes skew={20} color="red"/>

                <Grid spacing={0.5} color="green" />
                <Grid spacing={0.5} skew={20} color="red" />

            </Graph>
        )
    }
}
