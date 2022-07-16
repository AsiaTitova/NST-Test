import produce from 'immer';
import {
  USER_CREATE,
  USER_DELETE,
  USER_GET,
  USER_UPDATE,
  USERS_ERROR,
  USERS_GET,
  USERS_LOAD,
} from '../constans/constans';

const initialState = {
  users: [],
  user: null,
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

// список пользоватетей

const loadUsersSuccess = (draft, resp) => {
  draft.users = resp.users;
  draft.loading = false;
  return draft;
};

// получение конкретного пользователя

const loadUserSuccess = (draft, resp) => {
  draft.user = resp.user;
  draft.loading = false;
  return draft;
};

// создание пользователя

const loadCreateUserSuccess = (draft, resp) => {
  draft.loading = false;
  draft.users = draft.users.concat([resp.user]);
  return draft;
};

// редактирование пользователя

const loadUpdateUserSuccess = (draft, resp) => {
  draft.user = resp.user;
  draft.users = draft.users.map((item) => item.id === resp.user.id ? resp.user : item);
  draft.loading = false;
  return draft;
};

// удаление пользователя

const loadDeleteUserSuccess = (draft, resp) => {
  draft.user = null;
  draft.users = draft.users.filter((item) => item.id !== resp.user.id);
  draft.loading = false;
  return draft;
};

export default (state = initialState, action) => produce(
    state,
    (draft) => {
      switch (action.type) {
        case USERS_LOAD: return loading(draft);
        case USERS_ERROR: return errors(draft, action.error);
        case USERS_GET: return loadUsersSuccess(draft, action);
        case USER_GET: return loadUserSuccess(draft, action);
        case USER_CREATE: return loadCreateUserSuccess(draft, action);
        case USER_UPDATE: return loadUpdateUserSuccess(draft, action);
        case USER_DELETE: return loadDeleteUserSuccess(draft, action);
        default: return state;
      }
    },
);
