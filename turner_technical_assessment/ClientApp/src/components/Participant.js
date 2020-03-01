import React, { Component } from 'react'

export default class Participant extends Component {
    render() {
        return (
            <div>
                <h3>Name: {this.props.participant.Name}</h3>
                <h4>Role Type: {this.props.participant.RoleType}</h4>
                <h4>On-Screen Role? : {this.props.participant.IsOnScreen ? "Yes" : "No"}</h4>
            </div>
        )
    }
}
