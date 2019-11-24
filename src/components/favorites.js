import React from "react";
import "./Search.css";

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
    let movies = this.state.movies;
    movies.sort(function(a, b) {
      var nameA = a.Title.toUpperCase(); // ignore upper and lowercase
      var nameB = b.Title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    this.setState({ movies: movies });
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
                <th scope="col">IMDB avarage</th>
                <th scope="col">votes</th>
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
                      <td colSpan="6" className="hiddenRow">
                        <div
                          className="accordian-body collapse"
                          id={`c${index}`}
                        >
                          <div>
                            <img
                              src={`${movie.Poster}`}
                              alt={`${movie.Title}`}
                            ></img>
                          </div>
                          <div className="accordion-body-div">
                            <h4>Actors</h4>
                            <p>{movie.Actors}</p>
                          </div>
                          <div className="accordion-body-div">
                            <h4>Awards</h4>
                            <p>{movie.Awards}</p>
                          </div>
                          <div className="accordion-body-div">
                            <h6>Director</h6>
                            <p>{movie.Director}</p>
                            <h6>Box Office</h6>
                            <p>{movie.BoxOffice}</p>
                          </div>
                        </div>
                      </td>
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
