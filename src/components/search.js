import React from "react";
import "./Search.css";
import MoviesDataService from "./api";
import Form from "./form";
import InputArea from "./inputArea";
import MovieTableSearched from "./movieTableSearched";
import SortTable from "./sortTable";

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
    MoviesDataService.getSearchedMovies(
      this.state.inputValue,
      this.state.catogory
    ).then(res => {
      this.setState({ movies: res.data.Search });
      for (let i = 0; i < 10; i++) {
        MoviesDataService.getMovieById(this.state.movies[i].imdbID).then(
          res => {
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
          }
        );
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
        <div className="searchTop">
          <Form setCatogory={this.setCatogory} />
          <InputArea
            setInputValue={this.setInputValue}
            searchMovies={this.searchMovies}
          />
        </div>
        <MovieTableSearched
          sortByIMDBpoint={this.sortByIMDBpoint}
          sortByName={this.sortByName}
          sortByVotes={this.sortByVotes}
          movies={this.state.movies}
          heartClicked={this.heartClicked}
        />
      </div>
    );
  }
}

export default Search;
