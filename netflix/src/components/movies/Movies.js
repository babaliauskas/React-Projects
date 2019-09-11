import React from 'react';
import './movies.css';

const Movies = ({ movies, genre }) => {
    let movie;
    movie = movies.data.filter(movie => movie.genre_ids.includes(genre)).map(movie => {
        return (
            <div key={movie.id}>{movie.title}</div>
        )
    })
    return (
        <div className='movies'>
            {movie}
        </div>
    )
}

export default Movies
