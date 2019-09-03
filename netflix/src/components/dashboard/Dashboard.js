import React from 'react'

import { useMovies } from '../../hooks/useMovie';
import Latest from '../Latest/Latest';
import './dashboard.css';

const Dashboard = () => {
    // const mos = useMovies()

    // let asd = <p>Loading...</p>

    // if (mos) asd = mos.data[0].title
    return (
        <div className='dashboard'>
            <Latest />
        </div>
    )
}

export default Dashboard
