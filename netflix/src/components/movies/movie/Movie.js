import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMovieDetails } from '../../../hooks/useMovieDetails';
import img from '../../../info/info';
import './movie.css';

const Movie = (props) => {
    const data = useMovieDetails(props.match.params.id)
    console.log(data)
    console.log(props)
    return (
        <div className='movie'>
            {!data ? <h1>Loading...</h1> :
                <div className='bybis'>
                    <div className='black'></div>
                    <div className='cover' style={{ backgroundImage: `url(${img.backdropImg}${data.state.backdrop_path})` }}></div>
                </div>
            }

        </div>
    )
}

export default Movie
