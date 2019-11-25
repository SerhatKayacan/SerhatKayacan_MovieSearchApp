import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onChange={this.props.setCatogory}>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="movie"
          ></input>
          <label className="form-check-label" htmlFor="inlineRadio1">
            movie
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="series"
          ></input>
          <label className="form-check-label" htmlFor="inlineRadio2">
            series
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="episode"
          ></input>
          <label className="form-check-label" htmlFor="inlineRadio3">
            episode
          </label>
        </div>
      </form>
    );
  }
}
export default Form;
