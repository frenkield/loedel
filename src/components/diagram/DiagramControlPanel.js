import React from 'react'
import styles from './DiagramControlPanel.css'

export default class DiagramControlPanel extends React.Component {

    static defaultProps = {
        velocity: 0.3,
        axesBalance: 0.5
    }

    render() {

        const {
            velocity, onChangeVelocity,
            axesBalance, onChangeAxesBalance,
            groundGridOpacity, onChangeGroundGridOpacity,
            skyGridOpacity, onChangeSkyGridOpacity
        } = this.props

        return (

            <div className={styles.container}>

                <h3>Velocity</h3>
                <input type="range" min="0" max="1" step={0.01} onChange={onChangeVelocity} value={velocity} />

                <h3>Axes Balance</h3>
                <input type="range" min="0" max="1" step={0.01} onChange={onChangeAxesBalance} value={axesBalance} />

                <h3>Ground Grid</h3>
                <input type="range" min="0" max="1" step={0.01} onChange={onChangeGroundGridOpacity}
                       value={groundGridOpacity} />

                <h3>Sky Grid</h3>
                <input type="range" min="0" max="1" step={0.01} onChange={onChangeSkyGridOpacity}
                       value={skyGridOpacity} />

            </div>

        )
    }
}
