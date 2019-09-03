import { useState, useEffect } from 'react';
import axios from 'axios';

import key from '../info/info';

export const useLatest = id => {
    const [state, setState] = useState(null)

    useEffect(() => {
        axios.get(key.latestMovie)
            .then(res => {
                setState({ state: res.data })
            })
    }, [])
    return state
}