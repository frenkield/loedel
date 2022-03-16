/**
 * See https://en.wikipedia.org/wiki/Minkowski_diagram
 */
export default class Lorentz {

    constructor(velocity = 0.9) {
        this.setVelocity(velocity)
    }

    setVelocity(velocity) {

        this.velocity = velocity
        this.gamma = 1 / Math.sqrt(1 - Math.pow(velocity, 2))

        // beta is just the velocity since c is 1
        this.beta = velocity

        if (velocity == 0) {
            this.medianBeta = this.medianAngle = 0
        } else if (velocity == 1) {
            this.medianBeta = this.medianAngle = Math.PI / 4
        } else {
            this.medianBeta = (this.gamma - 1) / (this.beta * this.gamma)
            this.medianAngle = Math.atan(this.medianBeta)
        }
    }

    getGamma() {
        return this.gamma
    }

    getBeta() {
        return this.beta
    }

    getMedianBeta() {
        return this.getMedianBeta
    }

    getMedianAngle() {
        return this.medianAngle
    }

    toString() {
        return [this.velocity, this.gamma, this.medianAngle].join(', ')
    }
}
