import React from "react";
import Carousel from "./carousel";

class MovieTableSearched extends React.Component {
  render() {
    return (
      <div className="movieTable">
        <table className="table table-condensed">
          <thead>
            <tr>
              <th onClick={this.props.sortByName} scope="col">
                Movie Title
              </th>
              <th scope="col"></th>
              <th scope="col">Short Description</th>
              <th scope="col">Time</th>
              <th onClick={this.props.sortByIMDBpoint} scope="col">
                IMDB avarage
              </th>
              <th onClick={this.props.sortByVotes} scope="col">
                votes
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.movies.map((movie, index) => {
              return (
                <>
                  <tr
                    data-toggle="collapse"
                    data-target={`#c${index}`}
                    className="accordion-toggle"
                  >
                    <td>
                      <i
                        id="btn"
                        onClick={() => this.props.heartClicked(index)}
                        className={
                          movie.added ? "fas fa-heart" : "far fa-heart"
                        }
                      ></i>
                      <br></br>
                      {movie.Title}
                    </td>
                    <td>{movie.Released}</td>
                    <td>{movie.Plot}</td>
                    <td>{movie.Runtime}</td>
                    <td>{movie.imdbRating}</td>
                    <td>{movie.imdbVotes}</td>
                  </tr>
                  <tr>
                    <Carousel movie={movie} index={index} />
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default MovieTableSearched;
