import React, { Component } from "react";
// SCSS Style
import "../assets/scss/button.scss";

export default class CustomButton extends Component {
  render() {
    return (
      <div className="button-container" onClick={this.props.customClickEvent}>
        {this.props.name}
      </div>
    );
  }
}
