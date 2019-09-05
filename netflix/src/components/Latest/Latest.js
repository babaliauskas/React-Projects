import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCheck, faInfo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { useLatest } from '../../hooks/useLatest';
import './latest.css';

const Latest = () => {
    const latest = useLatest()
    console.log('lukas: ', latest)

    let overview = 'Loading...';
    if (latest) overview = latest.state.overview
    return (
        <div className='latest'>
            {!latest ? <h1>Loading...</h1> :
                <div className='cover'>
                    <div className='content'>
                        <div className='links'>
                            <Link to='/'><FontAwesomeIcon className='icon' icon={faPlay} /> Play</Link>
                            <Link to='/'><FontAwesomeIcon className='icon' icon={faCheck} /> My List</Link>
                            <Link to={`/movie/${latest.state.id}`}><FontAwesomeIcon className='icon icon-info' icon={faInfo} />More Info</Link>
                        </div>
                        <div className='about'>
                            <p>{overview}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Latest