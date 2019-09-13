import React from 'react';
import { useMovieDetails } from '../../../hooks/useMovieDetails';
import img from '../../../info/info';
import './movie.css';

const Movie = (props) => {
    const data = useMovieDetails(props.match.params.id)
    return (
        <div className='movie'>
            {!data ? <h1>Loading...</h1> :
                <div className='bybis'>
                    <div className='black'></div>
                    <div className='cover' style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${img.backdropImg}${data.state.poster_path})` }}></div>
                </div>
            }

        </div>
    )
}

export default Movie
