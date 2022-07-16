import {USER_GET, USERS_ERROR, USERS_GET, USERS_LOAD} from '../constans/constans';
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
    dispatch(getUserSuccess(resp.data[0], ''));
  } catch (error) {
    dispatch(errorUsersAction(error));
  };
};

// создание пользователя

const createUserSuccess = (user, error) => ({
  type: USER_GET,
  user,
  loading: false,
  error,
});

export const createUserAction = () => async (dispatch) => {
  try {
    const resp = await createUser();
    dispatch(createUserSuccess(resp.data, ''));
    dispatch(getUsersAction());
  } catch (error) {
    dispatch(errorUsersAction(error));
  };
};

// редактирование пользователя

const updateUserSuccess = (user, error) => ({
  type: USER_GET,
  user,
  loading: false,
  error,
});

export const updateUserAction = (id) => async (dispatch) => {
  try {
    const resp = await updateUser(id);
    dispatch(updateUserSuccess(resp.data, ''));
    dispatch(getUserAction(id));
    dispatch(getUsersAction());
  } catch (error) {
    dispatch(errorUsersAction(error));
  };
};

// удаление пользователя

const deleteUserSuccess = (user, error) => ({
  type: USER_GET,
  user,
  loading: false,
  error,
});

export const deleteUserAction = (id) => async (dispatch) => {
  try {
    const resp = await deleteUser(id);
    dispatch(deleteUserSuccess(resp.data, ''));
    dispatch(getUsersAction());
  } catch (error) {
    dispatch(errorUsersAction(error));
  };
};

