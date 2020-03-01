import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Header extends Component {
    render() {
        return (
            <header>
                <Link id="header-link" to="/"><h1>Streaming Title Lookup</h1></Link>
            </header>
        )
    }
}
