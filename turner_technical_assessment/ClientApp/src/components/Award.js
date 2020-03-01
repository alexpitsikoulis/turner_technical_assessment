import React, { Component } from 'react'

export default class Award extends Component {
    render() {
        return (
            <div>
                <h4>Award: {this.props.award.Award}</h4>
                <h4>{this.props.award.Participants}</h4>
                <h4>Award Won: {this.props.award.AwardWon ? "Yes" : "No"}</h4>
                <h5>{this.props.award.AwardCompany}</h5>
                <h6>{this.props.award.AwardYear}</h6>
            </div>
        )
    }
}
