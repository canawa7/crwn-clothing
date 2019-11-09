import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './redux/store';

//Provider is a component which is also a parent of the whole thing inside that gives access to all of the things related to the store

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
    );


//Need the store prop so the App can access all the root reducer

//Action -> Middleware -> Root-reducer -> Store -> React