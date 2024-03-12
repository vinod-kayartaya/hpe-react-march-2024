import React, { useState, useEffect } from 'react';

const MainFc = () => {
  console.log('MainFc() was called');
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState('batman');

  // this effect with [] is equivalent of componentDidMount()
  // gets executed exactly once after the component is rendered
  useEffect(() => {
    console.log('MainFc.useEffect() with [] was called');
    fetchMovies();
  }, []);

  // this effect without any deps is called everytime there is a change in any of the states/props
  useEffect(() => {
    console.log('MainFc.useEffect() with out [] was called');
  });

  // this effect is executed only when `movies` state is changed (not any other state)
  useEffect(() => {
    console.log('MainFc.useEffect() with [movies] was called');
  }, [movies]);

  const fetchMovies = () => {
    fetch('https://www.omdbapi.com/?apikey=aa9e49f&s=' + searchText)
      .then((resp) => resp.json())
      .then((data) => data.Search)
      .then(setMovies) // method reference
      .catch(console.error);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    fetchMovies();
  };

  return (
    <>
      <div className='container'>
        <h3>Functional component lifecycle hooks demo</h3>
        <hr />
        <div>
          <form onSubmit={submitHandler}>
            <input
              type='text'
              onChange={(evt) => setSearchText(evt.target.value)}
              value={searchText}
            />
          </form>
        </div>

        {searchText && <h4>Movies with `{searchText}` in their title</h4>}

        {movies.length > 0 &&
          movies.map((movie) => <h5 key={movie.imdbID}>{movie.Title}</h5>)}
      </div>
    </>
  );
};

export default MainFc;
