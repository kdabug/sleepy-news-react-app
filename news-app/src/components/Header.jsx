import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>welcome to {this.props.lastQuery + " "} news</h1>
      </div>
    );
  }
}
export default Header;
