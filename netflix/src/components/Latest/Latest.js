import React from 'react';

import { useLatest } from '../../hooks/useLatest';
import './latest.css';

const Latest = () => {
    const latest = useLatest()
    console.log('lukas: ', latest)
    return (
        <div className='latest'>
        </div>
    )
}

export default Latest