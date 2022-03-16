import React from 'react'

export default class Graph extends React.Component {

    static defaultProps = {
        width: 800,
        height: 800,
        centerX: 0,
        centerY: 0
    }

    render() {

        const viewBox = [-1 + this.props.centerX, -1 - this.props.centerY, 2, 2]

        return (

            <svg
                className={this.props.className}
                viewBox={viewBox.join(' ')}
                width={this.props.width}
                height={this.props.height}>

                {this.props.children}

            </svg>
        )
    }
}
