import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux'; 
import './index.css';
import App from './component/App';
import reducers from './module';

const createStoreWithMiddlewares = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
    <Provider store={
        createStoreWithMiddlewares(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    }>
     <App />
    </Provider>, 
document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

