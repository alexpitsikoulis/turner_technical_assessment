import React, { Component } from 'react'
import {Redirect} from "react-router-dom"

export default class Search extends Component {
    state = {
        searchInput: "",
        showAutofillOptions: false,
        filteredTitles: [],
        activeTitle: 0,
        selectedTitleId: "",
        redirectToTitlePage: false
    }

    handleChange = e => {
        const copiedState = { ...this.state };
        copiedState.searchInput = e.target.value;

        const filteredTitles = this.props.titles.filter(title => {
            return title.titleName.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) > -1;
        })

        this.setState({
            searchInput: copiedState.searchInput,
            filteredTitles,
            showAutofillOptions: true,
            activeTitle: 0
        });
    }

    handleClick = e => {
        this.setState({
            activeTitle: 0,
            filteredTitles: [],
            showAutofillOptions: false,
            searchInput: e.target.innerText
        })
    }

    handleKeyDown = e => {
        const { activeTitle, filteredTitles } = this.state;

        if (e.keyCode === 13) {
            if (this.state.showAutofillOptions) {
                e.preventDefault()
            }
            this.setState({
                showAutofillOptions: false,
                searchInput: filteredTitles[activeTitle].titleName
            })
        } else if (e.keyCode === 38) {
            e.preventDefault();
            if (activeTitle === 0) {
                return;
            }
            this.setState({ activeTitle: activeTitle - 1 });
        } else if (e.keyCode === 40) {
            e.preventDefault()
            if (activeTitle + 1 === filteredTitles.length) {
                return;
            }
            this.setState({ activeTitle: activeTitle + 1 })
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const selectedTitle = this.props.titles.filter(title => {
            return title.titleName.toLowerCase() === this.state.searchInput.toLowerCase()
        })[0];

        this.setState({
            selectedTitleId: selectedTitle.id,
            redirectToTitlePage: true
        })
    }

    render() {

        const {
            showAutofillOptions,
            searchInput,
            filteredTitles,
            activeTitle,
            selectedTitleId,
            redirectToTitlePage
        } = this.state;

        if (redirectToTitlePage) {
            return <Redirect to={`/titles/${selectedTitleId}`} />
        }

        let titleList;
        if (showAutofillOptions && searchInput) {
            if (filteredTitles.length) {
                titleList = (
                    <ul className="title-list">
                        {filteredTitles.map((title, i) => {
                            let className;
                            if (i === activeTitle) {
                                className = "option-active";
                            }
                            return (
                                <li className={className} key={title.id} onClick={this.handleClick} >
                                    {title.titleName}
                                </li>
                            )
                        })}
                    </ul>
                )
            } else {
                titleList = (
                    <div className="autofill-empty">
                        <p>No Autofill Suggestions</p>
                    </div>
                )
            }
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <label htmlFor="title">Title: </label>
                    <input
                        type="text"
                        id="Title"
                        name="Title"
                        value={this.state.searchInput}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                    />
                    <input type="submit" value="Submit" />
                    {titleList}
                </form>
            </div>
        )
    }
}
