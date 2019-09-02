import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Routes } from 'react-router-dom';

import App from './App';

const app = (
    <Routes>
        <App />
    </Routes>
)

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(app, wrapper) : false;