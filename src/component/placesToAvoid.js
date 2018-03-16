import React, { Component } from "react";
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

class PlacesToAvoid extends React.Component {
  constructor(props) {
    super(props);
    this.choosen_users = []
    this.names = []
  }

  createTasks(item) {
    return <div id='placestoavoid'>
      <li key={item.key}>{item.text}</li>
      <ul><li key={item.key}>There is nothing for {item.names} to partake.</li></ul>
      </div>
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <div id='placetoavoid'>
      <h6>Places To Avoid:</h6>
      <button onClick={this.calculate}>Calculate</button>
      <ul className="theList">
          {}
      </ul>
    </div>
    );
  }
};

PlacesToAvoid.defaultProps = {
  entries: [],
};

export default PlacesToAvoid;
