import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

//The Provider is a component that we get from react-redux
//react-redux is the binding between react and redux since redux can be used with something else
import {Provider} from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
// import store from './redux/store';
// import persistor from './redux/store';
import { store, persistor } from './redux/store';

//Provider is a component which is also a parent of the whole thing inside that gives access to all of the things related to the store
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


//Need the store prop so the App can access all the root reducer

//Action -> Middleware -> Root-reducer -> Store -> React