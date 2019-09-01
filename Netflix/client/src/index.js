import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// ReactDOM.render(<App />, document.getElementById('app'));

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<App />, wrapper) : false;