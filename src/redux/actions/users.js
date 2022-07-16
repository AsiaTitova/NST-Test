import {
  USER_CREATE,
  USER_DELETE,
  USER_GET,
  USER_UPDATE,
  USERS_ERROR,
  USERS_GET,
  USERS_LOAD,
} from '../constans/constans';
import {createUser, deleteUser, getCurrentUser, getUsers, updateUser} from '../../api/api';

const loadingUsersAction = () => ({
  type: USERS_LOAD,
  loading: true,
});

const errorUsersAction = (error) => ({
  type: USERS_ERROR,
  loading: false,
  error,
});

// список пользоватетей

const getUsersSuccess = (users, error) => ({
  type: USERS_GET,
  users,
  loading: false,
  error,
});

export const getUsersAction = () => async (dispatch) => {
  try {
    dispatch(loadingUsersAction());
    const resp = await getUsers();
    dispatch(getUsersSuccess(resp.data, ''));
  } catch (error) {
    dispatch(errorUsersAction(error));
  };
};

// получение конкретного пользователя

const getUserSuccess = (user, error) => ({
  type: USER_GET,
  user,
  loading: false,
  error,
});

export const getUserAction = (id) => async (dispatch) => {
  try {
    dispatch(loadingUsersAction());
    const resp = await getCurrentUser(id);
    dispatch(getUserSuccess(resp.data, ''));
  } catch (error) {
    dispatch(errorUsersAction(error));
  };
};

// создание пользователя

const createUserSuccess = (user, error) => ({
  type: USER_CREATE,
  user,
  loading: false,
  error,
});

export const createUserAction = (params) => async (dispatch) => {
  try {
    const resp = await createUser(params);
    dispatch(createUserSuccess(resp.data, ''));
  } catch (error) {
    dispatch(errorUsersAction(error));
  };
};

// редактирование пользователя

const updateUserSuccess = (user, error) => ({
  type: USER_UPDATE,
  user,
  loading: false,
  error,
});

export const updateUserAction = (body) => async (dispatch) => {
  try {
    const resp = await updateUser(body);
    dispatch(updateUserSuccess(resp.data, ''));
  } catch (error) {
    dispatch(errorUsersAction(error));
  };
};

// удаление пользователя

const deleteUserSuccess = (id, error) => ({
  type: USER_DELETE,
  user: {
    id: id,
  },
  loading: false,
  error,
});

export const deleteUserAction = (id) => async (dispatch) => {
  try {
    await deleteUser(id);
    dispatch(deleteUserSuccess(id, ''));
  } catch (error) {
    dispatch(errorUsersAction(error));
  };
};

