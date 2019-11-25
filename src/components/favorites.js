import React from "react";
import "./Search.css";
import Carousel from "./carousel";
import SortTable from "./sortTable";

class Favorites extends React.Component {
  state = {
    movies: []
  };
  componentDidMount() {
    if (localStorage.getItem("favoriler")) {
      let favorites = JSON.parse(localStorage.getItem("favoriler"));
      this.setState({ movies: favorites });
    }
  }
  sortByName = () => {
    let sortesMovies = SortTable.sortByName(this.state.movies);
    this.setState({ movies: sortesMovies });
  };
  sortByIMDBpoint = () => {
    let sortedMovies = SortTable.sortByIMDBpoint(this.state.movies);
    this.setState({ movies: sortedMovies });
  };
  sortByVotes = () => {
    let sortedMovies = SortTable.sortByVotes(this.state.movies);
    this.setState({ movies: sortedMovies });
  };
  render() {
    return (
      <div>
        <div className="movieTable">
          <table className="table table-condensed">
            <thead>
              <tr>
                <th onClick={this.sortByName} scope="col">
                  Movie Title
                </th>
                <th scope="col"></th>
                <th scope="col">Short Description</th>
                <th scope="col">Time</th>
                <th onClick={this.sortByIMDBpoint} scope="col">
                  IMDB avarage
                </th>
                <th onClick={this.sortByVotes} scope="col">
                  votes
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie, index) => {
                return (
                  <>
                    <tr
                      data-toggle="collapse"
                      data-target={`#c${index}`}
                      className="accordion-toggle"
                    >
                      <td>{movie.Title}</td>
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
      </div>
    );
  }
}

export default Favorites;
