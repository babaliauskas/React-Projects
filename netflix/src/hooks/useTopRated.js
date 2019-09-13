import { useState, useEffect } from 'react';
import axios from 'axios';

import key from '../info/info';

export const useTopRated = () => {
    const [state, setState] = useState(null)

    useEffect(() => {
        axios.get(key.topRated)
            .then(res => {
                setState({ state: res.data })
            })
    }, [])
    return state
}