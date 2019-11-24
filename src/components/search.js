import React from "react";
import "./Search.css";
import axios from "axios";

class Search extends React.Component {
  state = {
    inputValue: "",
    movies: [],
    catogory: "",
    favorites: []
  };
  componentDidMount() {
    if (localStorage.getItem("favoriler")) {
      let favorites = JSON.parse(localStorage.getItem("favoriler"));
      this.setState({ favorites: favorites });
    }
  }
  setInputValue = e => {
    this.setState({ inputValue: e.target.value });
    console.log(this.state);
  };
  searchMovies = () => {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=7175a363&s=${this.state.inputValue}&type=${this.state.catogory}`
      )
      .then(res => {
        this.setState({ movies: res.data.Search });
        for (let i = 0; i < 10; i++) {
          axios
            .get(
              `http://www.omdbapi.com/?apikey=7175a363&i=${this.state.movies[i].imdbID}`
            )
            .then(res => {
              console.log(res);
              let movies = this.state.movies;
              movies[i].added = false;
              movies[i].Actors = res.data.Actors;
              movies[i].Plot = res.data.Plot;
              movies[i].Runtime = res.data.Runtime;
              movies[i].imdbRating = res.data.imdbRating;
              movies[i].imdbVotes = res.data.imdbVotes;
              movies[i].Released = res.data.Released;
              movies[i].Awards = res.data.Awards;
              movies[i].BoxOffice = res.data.BoxOffice;
              movies[i].Director = res.data.Director;
              this.setState({ movies: movies });
            });
        }
      });
  };
  setCatogory = e => {
    this.setState({ catogory: e.target.value });
    console.log(this.state);
  };
  heartClicked = index => {
    let movies = this.state.movies;
    movies[index].added = true;
    this.setState({ movies: movies });
    let movieToAdd = this.state.movies[index];
    let favorites = this.state.favorites;

    let isInclude = favorites.some(function(movie) {
      return movie === movieToAdd;
    });
    if (!isInclude) {
      favorites.push(movieToAdd);
      this.setState({ favorites: favorites });
      localStorage.setItem("favoriler", JSON.stringify(favorites));
    }
  };
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
        <form onChange={this.setCatogory}>
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
        <input
          type="text"
          className="form-control"
          onChange={this.setInputValue}
        ></input>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.searchMovies}
        >
          search
        </button>
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
                      <td>
                        <i
                          id="btn"
                          onClick={() => this.heartClicked(index)}
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

export default Search;
