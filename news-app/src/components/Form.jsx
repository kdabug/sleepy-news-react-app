import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <form className="form">
          <label htmlFor="formQuery">Search All the New Newzzz By Topic:</label>
          <input
            type="text"
            name="formQuery"
            id="formQuery"
            value={this.props.formQuery}
            onChange={this.props.onChange}
          />
          <input type="submit" onClick={this.props.onSubmit} />
        </form>
      </div>
    );
  }
}
export default Form;
