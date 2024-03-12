import React, { Component } from 'react';

export default class Main extends Component {
  state = { movies: [], searchText: '' };

  constructor() {
    super();
    console.log('Main.constructor() was called');
  }

  // the return value from this lifecycle method decides whether or not to re-render the component
  shouldComponentUpdate() {
    console.log('Main.shouldComponentUpdate() was called; `true` was returned');
    return true;
  }

  // a convenient function to capture the fact that the component is now ready (after update)
  componentDidUpdate() {
    console.log('Main.componentDidUpdate() was called');
  }

  // this lifecycle method is called EXACLY ONCE when the component is mounted on the browser
  componentDidMount() {
    console.log('Main.componentDidMount() was called');
  }

  //   fetchMovies = (evt) => {
  fetchMovies(evt) {
    evt.preventDefault();

    if (!this.state.searchText) {
      return;
    }

    fetch('https://www.omdbapi.com/?apikey=aa9e49f&s=' + this.state.searchText)
      .then((resp) => resp.json())
      .then((data) => data.Search)
      .then((movies) => this.setState({ ...this.state, movies }))
      .catch(console.error); // the `fetch` api will call the `console.error` by supplying the error object
  }

  // this lifecycle mehtod is called not only when the component is mounted on the browser, but,
  // each time the state or props is changed.
  // DO NOT TRIGGER THE STATE-CHANGE FROM THE render() method; it gets into recursion
  render() {
    console.log('Main.render() was called');
    return (
      <>
        <div className='container'>
          <h3>Component lifecycle methods demo</h3>
          <hr />

          <div>
            <form onSubmit={this.fetchMovies.bind(this)}>
              <input
                type='text'
                onChange={(evt) =>
                  this.setState({ ...this.state, searchText: evt.target.value })
                }
                value={this.state.searchText}
              />
            </form>
          </div>

          {this.state.searchText && (
            <h4>Movies with `{this.state.searchText}` in their title</h4>
          )}

          {this.state.movies.map((movie) => (
            <h5 key={movie.imdbID}>{movie.Title}</h5>
          ))}
        </div>
      </>
    );
  }
}
