import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = (store) => (next) => (action) => {
  next(action);
};

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, middleware)),
);

export default store;
