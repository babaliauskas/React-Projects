import React from 'react'

import './dashboard.css';

import { useMovies } from '../../hooks/useMovie';
import Latest from '../Latest/Latest';
import Movies from '../movies/Movies';

const Dashboard = () => {

    const movies = useMovies();
    let comedies, drama, action = <p>Loading...</p>
    if (movies) {
        comedies = <Movies genre={35} movies={movies} />
        drama = <Movies genre={18} movies={movies} />
        action = <Movies genre={28} movies={movies} />
    }
    return (
        <div className='dashboard'>
            <Latest />
            <div className='display-list-movies'>
                <div className='list-popular'>
                    <h2>Comedies</h2>
                    {comedies}
                    <h2>Drama</h2>
                    {drama}
                    <h2>Action</h2>
                    {action}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
