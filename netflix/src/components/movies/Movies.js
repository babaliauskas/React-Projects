import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import './movies.css';
import { backdropImg, movieDetails } from '../../info/info';

const Movies = ({ movies, genre }) => {

    let movieInfo;
    const getMovieDetails = id => {
        axios.get(movieDetails(id))
            .then(res => movieInfo = res.data)
            .catch(err => console.log(err))
    }

    let movie;
    if (genre) {
        movie = movies.data.filter(movie => movie.genre_ids.includes(genre)).map(movie => {
            return (
                <div className='about-movie' key={movie.id}>

                </div>
            )
        })
    } else {
        movie = movies.state.results.splice(0, 10).map(movie => {
            return (
                <div className='about-movie' key={movie.id} style={{ backgroundImage: `url(${backdropImg}${movie.poster_path})` }}>
                    <div className='about-darken'>
                        <div className='about-menu'>
                            <FontAwesomeIcon className='icon' icon={faVolumeMute} />
                            <FontAwesomeIcon className='icon' icon={faThumbsDown} />
                            <FontAwesomeIcon className='icon' icon={faThumbsUp} />
                        </div>
                        <div className='about-title'>
                            {movie.title}
                        </div>
                        <div className='about-btn-more'>
                            <button onClick={() => getMovieDetails(movie.id)}>More info</button>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className='movies'>
            {movie}
        </div>
    )
}

export default Movies
