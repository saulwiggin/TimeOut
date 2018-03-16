import React, { Component } from "react";
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import AddTeamMember from "./addTeamMember";

class PlacesToVisit extends React.Component {
  constructor(props) {
    super(props);
    this.names = this.props.entries
    this.choose_users = []
    this.choosen_name = []
    this.placesToAvoid = []
    this.peopleWithPlacesToAvoid = []
    this.placesToVisit = []
    this.peoplePlacesToVisit = []
  }

   calculate(props){
    $.getJSON("./scripts/users.json", function (users) {
        $.each(users, function (index, value) {
           console.log(value);
           var name = []
           name.foreach(function(){
             console.log(name)
             if (name.indexOf(value['names']) > -1){
               this.choosen_users.pop(value);
             }
           })
        });
    });
    $.getJSON("./scripts/venues.json", function (venues) {
        $.each(venues, function (index, value) {
           console.log(value);
           $.each(this.choose_users, function(index2, value2){
             if (this.choosen_users['wont_eat'].indexOf(value['food']) > -1){
               this.placesToAvoid = value
               this.peopleWithPlacesToAvoid = value2
             }
             if (this.choosen_users['drinks'].indexOf(value['drinks']) > -1){
               this.placesToVisit = value
               this.peoplePlacesToVisit = value2
             }
           })
        });
    });
  }

  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }

  render() {
    // var peoplePlacesToVisit = createTasks(this.peoplePlacesToVisit);
    // var venuesToVisit = createTasks(this.placesToVisit);

    return (
      <div id='placetogo'>
        <button onClick={this.calculate}>Calculate</button>

      <h6>Places To Go:</h6>
      <ul className="visit">
          {this.placesToVisit}
      </ul>
      <h6>Places To Avoid:</h6>
      <ul className="avoid">
          {this.placesToAvoid}
      </ul>
      <ul>
        {}
      </ul>
    </div>
    );
  }
};

PlacesToVisit.defaultProps = {
  entries: [],
};

export default PlacesToVisit;
