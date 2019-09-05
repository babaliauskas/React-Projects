import { useState, useEffect } from 'react';
import axios from 'axios';

import key from '../info/info';

export const useMovieDetails = id => {
    const [state, setState] = useState(null)

    useEffect(() => {
        axios.get(key.movieDetails(id))
            .then(res => {
                setState({ state: res.data })
            })
    }, [id])
    return state
}