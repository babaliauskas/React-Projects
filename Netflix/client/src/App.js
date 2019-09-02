import React from 'react';
import { useFetch } from './hooks/getMovies';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar/Navbar';
import style from './app.css';
import Routes from './Routes';


const App = () => {
    // const { movies } = useFetch()

    // console.log('movies: ', movies)
    // let moviesData;
    // if (movies) {
    //     moviesData = movies.map(movie => {
    //         return <Dashboard key={movie.id} title={movie.title} id={movie.id} />
    //     })
    // }
    return (
        <div className={style}>
            <Navbar />
            {/* {moviesData} */}
            {Routes}
        </div>
    )
}

export default App