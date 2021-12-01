import React, { Component } from 'react'

export default class Count extends Component {
    state = {count :0}

    increase = async () => {
        await window.counterAdd(1)
        const count = await window.counterValue()
        this.setState({count})
    }

    decrease = async () => {
        await window.counterAdd(-1)
        const count = await window.counterValue()
        this.setState({count})
    }

    render() {
        const {count} = this.state
        return (
            <div className="counter-container">
                <div className="counter">Count: {count}</div>
                <div className="btn-row">
                    <div className="btn btn-incr" onClick={this.increase}>+1</div>
                    <div className="btn btn-decr" onClick={this.decrease}>-1</div>
                </div>
            </div>
        )
    }
}
