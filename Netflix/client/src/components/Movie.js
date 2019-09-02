import React from 'react'
import { getCast } from '../hooks/getCasts';

const Movie = ({ title, id }) => {
    const { person } = getCast(id)
    return (
        <div>
            {title}
        </div>
    )
}

export default Movie
