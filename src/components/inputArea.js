import React from "react";

class InputArea extends React.Component {
  render() {
    return (
      <div className="mySearchArea">
        <input
          type="text"
          className="form-control searchInput"
          onChange={this.props.setInputValue}
        ></input>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.props.searchMovies}
        >
          search
        </button>
      </div>
    );
  }
}
export default InputArea;
