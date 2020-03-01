import React, { Component } from 'react'

export default class StoryLine extends Component {
    render() {
        return (
            <div>
                <h4>Type: {this.props.storyline.Type}</h4>
                <h4>Language: {this.props.storyline.Language}</h4>
                <p>Description: {this.props.storyline.Description}</p>
            </div>
        )
    }
}
