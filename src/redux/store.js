import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const middleware = (store) => (next) => (action) => {
  next(action);
};

const store = createStore(
    composeWithDevTools(applyMiddleware(thunk, middleware)),
);

export default store;
