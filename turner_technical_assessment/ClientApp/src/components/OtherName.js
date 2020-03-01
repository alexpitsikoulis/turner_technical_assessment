import React, { Component } from 'react'

export default class OtherName extends Component {
    render() {
        return (
            <div>
                <h4>Name: {this.props.otherName.TitleName}</h4>
                <h6>Name Type: {this.props.otherName.TitleNameType}</h6>
                <h6>Name Language: {this.props.otherName.TitleNameLanguage}</h6>
            </div>
        )
    }
}
