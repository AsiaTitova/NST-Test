import {combineReducers} from 'redux';
import users from './users';
import notice from './notice';

const rootReducer = combineReducers({
  users: users,
  notice: notice,
});

export default rootReducer;
