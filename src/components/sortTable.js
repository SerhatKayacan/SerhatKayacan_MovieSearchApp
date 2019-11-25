import remSep from "string-remove-thousand-separators";

class SortTable {
  sortByName(movies) {
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
    return movies;
  }
  sortByIMDBpoint(movies) {
    movies.sort(function(a, b) {
      return b.imdbRating - a.imdbRating;
    });
    return movies;
  }
  sortByVotes(movies) {
    console.log(movies);
    movies.sort(function(a, b) {
      return remSep(b.imdbVotes) - remSep(a.imdbVotes);
    });
    return movies;
  }
}
export default new SortTable();
