import React from "react";

class Carousel extends React.Component {
  render() {
    return (
      <td colSpan="6" className="hiddenRow">
        <div className="accordian-body collapse" id={`c${this.props.index}`}>
          <div>
            <img
              src={`${this.props.movie.Poster}`}
              alt={`${this.props.movie.Title}`}
            ></img>
          </div>
          <div className="accordion-body-div">
            <h4>Actors</h4>
            <p>{this.props.movie.Actors}</p>
          </div>
          <div className="accordion-body-div">
            <h4>Awards</h4>
            <p>{this.props.movie.Awards}</p>
          </div>
          <div className="accordion-body-div">
            <h6>Director</h6>
            <p>{this.props.movie.Director}</p>
            <h6>Box Office</h6>
            <p>{this.props.movie.BoxOffice}</p>
          </div>
        </div>
      </td>
    );
  }
}
export default Carousel;
