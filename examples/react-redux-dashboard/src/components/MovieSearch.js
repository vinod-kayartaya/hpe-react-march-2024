import React, { Component } from 'react';
import axios from 'axios';
import { withBox, withLoading } from '../hoc/custom-hoc';

class MovieSearch extends Component {
  state = { searchText: '', movies: [], error: null };

  changeHandler = ({ target: { name, value } }) => {
    this.setState({ ...this.state, [name]: value });
  };

  /*
  changeHandler = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  */

  submitHandler = async (e) => {
    e.preventDefault();
    console.log('searching for ', this.state.searchText);
    const url = `http://www.omdbapi.com/?apikey=aa9e49f&s=${this.state.searchText}`;
    // axios
    //   .get(url)
    //   .then((resp) => resp.data)
    //   .then((data) => data.Search)
    //   .then((movies) => this.setState({ ...this.state, movies }))
    //   .catch(console.error);

    try {
      const { data } = await axios.get(url);
      const movies = data.Search;
      this.setState({ ...this.state, movies });
    } catch (err) {
      this.setState({ ...this.state, error: err.message });
    }
  };

  render() {
    return (
      <>
        <h3>Search movies by title</h3>

        <form onSubmit={this.submitHandler}>
          <input
            type='search'
            name='searchText'
            value={this.state.searchText}
            onChange={this.changeHandler}
            className='form-control'
          />
        </form>

        {this.state.error && (
          <h3 className='text-danger'>{this.state.error}</h3>
        )}

        <ul className='list-group'>
          {this.state.movies.map((m) => (
            <li key={m.imdbID} className='list-group-item'>
              {m.Title}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default withBox(MovieSearch, { color: 'red' });
