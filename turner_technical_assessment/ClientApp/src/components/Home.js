import React, { Component } from 'react'
import axios from "axios"
import Search from "./Search"

export default class Home extends Component {

    state = {
        titles: [],
        errors: {}
    }

    componentDidMount() {
        this.getTitles();
    }

    getTitles = () => {
        axios.get("/api/titles").then(res => {
            this.setState({titles: res.data})
        }).catch(err => {
            this.setState({errors: err.data})
        })
    }

    render() {
        return (
            <div>
                <h1>Title Look Up</h1>
                <Search titles={this.state.titles} />
            </div>
        )
    }
}
