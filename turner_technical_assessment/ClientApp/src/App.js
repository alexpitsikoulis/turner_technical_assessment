import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from "./components/Home";
import Title from './components/Title';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <div>
            <Route exact path='/' component={Home} />
            <Route path="/titles/:titleId" component={Title} />
      </div>
    );
  }
}
