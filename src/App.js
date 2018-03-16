import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTeamMember from './component/addTeamMember'
import VisibleList from './component/visibleList'
import PlacesToVisit from './component/placesToVisit'
import PlacesToAvoid from './component/placesToAvoid'

class App extends Component {
  render() {
    return (
        <div>
          <AddTeamMember />
        </div>
    );
  }
}

export default App;
