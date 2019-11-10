import React, { Component } from "react";

class Form extends Component {
  render() {
    const { formQuery, onSubmit, onChange } = this.props;
    return (
      <div>
        <form className="form">
          <label htmlFor="formQuery">
            search all the new Newzzz by topic:{" "}
          </label>
          <input
            type="text"
            name="formQuery"
            id="formQuery"
            value={formQuery}
            onChange={onChange}
          />
          <input type="submit" className="submit" onClick={onSubmit} />
        </form>
      </div>
    );
  }
}
export default Form;
