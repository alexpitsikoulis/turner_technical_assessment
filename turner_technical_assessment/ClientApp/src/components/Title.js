import React, { Component } from 'react'
import {Redirect} from "react-router-dom"
import axios from "axios"
import Award from './Award';
import OtherName from "./OtherName"
import Participant from './Participant';
import StoryLine from './StoryLine';

export default class Title extends Component {

    state = {
        title: {
            genres: [],
            awards: [],
            otherNames: [],
            participants: [],
            storylines: []
        },
        errors: {},
        showAwards: false,
        showOtherNames: false,
        showParticipants: false,
        showStorylines: false,
        redirectToSearch: false
    }

    componentDidMount() {
        this.getTitle();
    }

    getTitle = () => {
        axios.get(`/api/titles/${this.props.match.params.titleId}`).then(res => {
            this.setState({title: res.data, isLoaded: true})
        }).catch(err => {
            this.setState({errors: err.data})
        })
    }

    handleToggleShowAwards = () => {
        this.setState(state => {
            return { showAwards: !state.showAwards }
        })
    }

    handleToggleShowOtherNames = () => {
        this.setState(state => {
            return {showOtherNames: !state.showOtherNames}
        })
    }

    handleToggleShowParticipants = () => {
        this.setState(state => {
            return { showParticipants: !state.showParticipants }
        })
    }

    handleToggleShowStorylines = () => {
        this.setState(state => {
            return { showStorylines: !state.showStorylines }
        })
    }

    handleRedirectToSearch = () => {
        this.setState({ redirectToSearch: true })
    }

    render() {
        const {
            title,
            showAwards,
            showOtherNames,
            showParticipants,
            showStorylines,
            redirectToSearch
        } = this.state;

        if (redirectToSearch) {
            return <Redirect to="/" />
        }

        let awardsList = [];
        if (this.state.title.awards) {
            awardsList = this.state.title.awards.map(award => {
                return (
                    <Award award={award} />
                )
            })
        }
        
        const otherNameList = this.state.title.otherNames.map((otherName, i) => {
            return (
                <OtherName key={`${otherName.TitleName}${i}`} otherName={otherName} />
                )
        })
        const participantList = this.state.title.participants.map((participant, i) => {
            return (
                <Participant key={`${participant.Name}${i}`} participant={participant} />
                )
        })
        const storylineList = this.state.title.storylines.map((storyline, i) => {
            return (
                <StoryLine key={`${storyline.type}${i}`} storyline={storyline} />
                )
        })
        const genreList = this.state.title.genres.map(genre => {
            return this.state.title.genres.indexOf(genre) < this.state.title.genres.length - 1 ? <span key={genre}>{genre}, </span> : <span key={genre}>{genre}</span>
        })

        return (
            <div>
                <h1>{title.titleName} ({title.releaseYear})</h1>
                <div id="redirect-button">
                    <button onClick={this.handleRedirectToSearch}>Back To Search</button>
                </div>
                <div className="details">
                    <h2>Genres: {genreList}</h2>
                    <h2 onClick={this.handleToggleShowParticipants}> Participants (+)</h2>
                    {showParticipants ? participantList : null}
                    {this.state.title.awards ? (
                        <div>
                            <h2 onClick={this.handleToggleShowAwards} > Awards (+)</h2>
                            {showAwards ? awardsList : null}
                            </div>) : null}
                    <h2 onClick={this.handleToggleShowStorylines} > Storylines (+)</h2>
                    {showStorylines ? storylineList : null}
                    <h2 onClick={this.handleToggleShowOtherNames} > Other Names (+)</h2>
                    {showOtherNames ? otherNameList : null}
                </div>
            </div>
            )
    }
}
