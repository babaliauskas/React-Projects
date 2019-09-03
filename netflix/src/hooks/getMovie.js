import { useState, useEffect } from 'react';
import axios from 'axios';

export const getMovies = () => {
    const [movies, setState] = useState({ data: [] })

    useEffect(() => {
        let list = []
        // for (let i = 1; i < 3; i++) {
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=20f8138ea677f7a8fdaa98e20c8093e7&language=en-US&page=1`
        axios.get(url)
            .then(res => {
                res.data.results.forEach(movie => list.push(movie))
                setState({ data: list })
            })
        // }
    }, [])
    return movies
}