import React from 'react'
import styles from './App.css'
import LoedelDiagram from './diagram/LoedelDiagram'
import DiagramControlPanel from './diagram/DiagramControlPanel'

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            velocity: 0.7,
            axesBalance: 0.5,
            groundGridOpacity: 1,
            skyGridOpacity: 1
        }
    }

    onChangeVelocity = (event) => {
        const velocity = parseFloat(event.target.value)
        this.setState({velocity})
    }

    onChangeAxesBalance = (event) => {
        // console.log('axes balance', event.target.value)
        this.setState({axesBalance: parseFloat(event.target.value)})
    }

    onChangeGroundGridOpacity = (event) => {
        this.setState({groundGridOpacity: parseFloat(event.target.value)})
    }

    onChangeSkyGridOpacity = (event) => {
        this.setState({skyGridOpacity: parseFloat(event.target.value)})
    }

    render() {

        const {range} = this.props
        const scaledVelocity = Math.sin(this.state.velocity * Math.PI / 2)

        return (

            <div className={styles.app}>

                <h1>Loedel Diagram</h1>
                <div className={styles.loedelDiagram}>

                    <LoedelDiagram velocity={scaledVelocity} axesBalance={this.state.axesBalance}
                                   centerX={0.5} centerY={0.5} groundGridOpacity={this.state.groundGridOpacity}
                                   skyGridOpacity={this.state.skyGridOpacity} />

                    <DiagramControlPanel
                        onChangeVelocity={this.onChangeVelocity}
                        velocity={this.state.velocity}
                        onChangeAxesBalance={this.onChangeAxesBalance}
                        axesBalance={this.state.axesBalance}
                        onChangeGroundGridOpacity={this.onChangeGroundGridOpacity}
                        groundGridOpacity={this.state.groundGridOpacity}
                        onChangeSkyGridOpacity={this.onChangeSkyGridOpacity}
                        skyGridOpacity={this.state.skyGridOpacity}
                    />

                </div>

            </div>
        )
    }
}
