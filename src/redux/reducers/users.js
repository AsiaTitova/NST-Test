import produce from 'immer';
import {USERS_ERROR, USERS_GET, USERS_LOAD} from '../constans/constans';

const initialState = {
  users: [],
  loading: false,
  error: '',
};

const loading = (draft) => {
  draft.loading = true;
  return draft;
};

const errors = (draft, error) => {
  draft.loading = false;
  draft.error = error;
  return draft;
};


const loadSuccess = (draft, resp) => {
  draft.users = resp.users;
  draft.loading = false;
  return draft;
};

export default (state = initialState, action) => produce(
    state,
    (draft) => {
      switch (action.type) {
        case USERS_LOAD: return loading(draft);
        case USERS_ERROR: return errors(draft, action.error);
        case USERS_GET: return loadSuccess(draft, action);
        default: return state;
      }
    },
);
