import React, { Component } from 'react'
import UpdatedComp from './UpdatedComp'

class ClickCounter extends Component {
       
    render() {
        const { count, incrementCount } = this.props
        return (
          <center>
            <button onClick={incrementCount}> Click</button>
            <h3>Clicked {count} Times</h3>

          </center>
        )
    }
}

export default UpdatedComp(ClickCounter)
