import React from 'react'

import './dashboard.css';

import { useMovies } from '../../hooks/useMovie';
import { useTopRated } from '../../hooks/useTopRated';
import Latest from '../Latest/Latest';
import Movies from '../movies/Movies';

const Dashboard = () => {

    const movies = useMovies();
    const topRatedMovies = useTopRated();
    let comedies, drama, action, adventure, topRated = <p>Loading...</p>
    if (movies) {
        comedies = <Movies genre={35} movies={movies} />
        drama = <Movies genre={18} movies={movies} />
        action = <Movies genre={28} movies={movies} />
        adventure = <Movies genre={12} movies={movies} />
    }
    if (topRatedMovies) topRated = <Movies movies={topRatedMovies} />
    return (
        <div className='dashboard'>
            <Latest />
            <div className='display-list-movies'>
                <div className='list-popular'>
                    <h2>New Releases</h2>
                    {topRated}
                    <h2>Comedies</h2>
                    {comedies}
                    <h2>Drama</h2>
                    {drama}
                    <h2>Action</h2>
                    {action}
                    <h2>Adventure</h2>
                    {adventure}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
