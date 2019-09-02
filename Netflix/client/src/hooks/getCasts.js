import { useEffect, useState } from 'react';
import axios from 'axios';

export const getCast = (id) => {
    const [state, setState] = useState({ person: [] })

    useEffect(() => {
        let list = []
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=20f8138ea677f7a8fdaa98e20c8093e7`)
            .then(res => {
                list = res.data.cast.filter(e => e.order <= 5)
                setState({ person: list })
            })
    }, [])
    return state
}

