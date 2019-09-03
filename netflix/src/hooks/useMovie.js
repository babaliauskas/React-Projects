import { useState, useEffect } from 'react';
import axios from 'axios';

import key from '../info/info';

export const useMovies = () => {
    const [movies, setState] = useState(null)

    useEffect(() => {
        let list = []
        // for (let i = 1; i < 3; i++) {
        axios.get(key.movies(1))
            .then(res => {
                res.data.results.forEach(movie => list.push(movie))
                setState({ data: list })
            })
        // }
    }, [])
    return movies
}