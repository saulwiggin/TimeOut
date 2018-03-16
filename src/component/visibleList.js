import React, { Component } from "react";
import PropTypes from 'prop-types';


class TodoItems extends React.Component {

  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};

TodoItems.defaultProps = {
  entries: [],
};

export default TodoItems;
