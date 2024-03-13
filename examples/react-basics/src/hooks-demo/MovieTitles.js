import { useFetch } from './custom-hooks';

const MovieTitles = () => {
  const url = 'https://www.omdbapi.com/?apikey=aa9e49f&s=miller';
  const { data, isLoading, error } = useFetch(url);

  return (
    <>
      <div className='container'>
        <h3>Movie list</h3>
        <hr />
        {isLoading && <p className='lead'>loading...</p>}
        {error && <p className='lead text-danger'>something went wrong...</p>}

        {data && (
          <>
            <p className='lead'>Total movies/shows: {data.totalResults}</p>
            <ul className='list-group'>
              {data.Search.map((m) => (
                <li key={m.imdbID} className='list-group-item'>
                  <div className='row'>
                    <div className='col-2'>
                      <img
                        style={{ width: '75px', height: '75px' }}
                        src={m.Poster}
                        alt={m.Title}
                      />
                    </div>
                    <h5 className='col-10'>{m.Title}</h5>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default MovieTitles;
