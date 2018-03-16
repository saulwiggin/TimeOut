import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux'
import { addTeamMember } from "../status/addTeamMember";
import TodoItems from "./visibleList";
import PlacesToVisit from "./placesToVisit";
import PlacesToAvoid from "./placesToAvoid";
import PropTypes from 'prop-types';

class AddTeamMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(e) {
    if (this._inputElement.value !== "") {
     var newItem = {
       text: this._inputElement.value,
       key: Date.now()
     };

     this.setState((prevState) => {
       return {
         items: prevState.items.concat(newItem)
       };
     });

     this._inputElement.value = "";
   }

   console.log(this.state.items);

   e.preventDefault();
  }
render(){
  return (
    <div>
      <form
        onSubmit={this.addItem}
      >
      <input ref={(a) => this._inputElement = a}
                placeholder="enter">
        </input>
        <button type="submit">Add Team Member</button>
      </form>
      <TodoItems entries={this.state.items}/>
      <PlacesToVisit entries={this.state.items}/>
    </div>
  );
}

};

AddTeamMember.defaultProps = {
  entries: [],
};

export default AddTeamMember;
