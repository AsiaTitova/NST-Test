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
import {setNoticeAction} from './notice';

const errorsNotifications = (error, dispatch) => {
  switch (error) {
    case 400: {
      return dispatch(setNoticeAction({
        status: 'error',
        label: 'Не верный запрос!',
      }));
    }
    case 404: {
      return dispatch(setNoticeAction({
        status: 'error',
        label: 'Сотрудник не найден!',
      }));
    }
    default: {
      return dispatch(setNoticeAction({
        status: 'error',
        label: 'Ошибка сервера!',
      }));
    }
  }
};

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
    if (resp.status === 200 || resp.status === 201 || resp.status === 304) {
      dispatch(getUsersSuccess(resp.data, ''));
    } else {
      errorsNotifications(resp.status, dispatch);
    }
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
    const resp = await getCurrentUser(id);
    if (resp.status === 200 || resp.status === 201 || resp.status === 304) {
      dispatch(getUserSuccess(resp.data, ''));
    } else {
      errorsNotifications(resp.status, dispatch);
    }
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
    if (resp.status === 200 || resp.status === 201) {
      dispatch(createUserSuccess(resp.data, ''));
      dispatch(setNoticeAction({
        status: 'success',
        label: 'Сотрудник успешно создан!',
      }));
    } else {
      errorsNotifications(resp.status, dispatch);
    }
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
    if (resp.status === 200 || resp.status === 201) {
      dispatch(updateUserSuccess(resp.data, ''));
      dispatch(setNoticeAction({
        status: 'success',
        label: 'Данные сотрудника успешно изменены!',
      }));
    } else {
      errorsNotifications(resp.status, dispatch);
    }
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
    const resp = await deleteUser(id);
    if (resp.status === 200 || resp.status === 201) {
      dispatch(deleteUserSuccess(id, ''));
      dispatch(setNoticeAction({
        status: 'success',
        label: 'Сотрудник успешно удален!',
      }));
    } else {
      errorsNotifications(resp.status, dispatch);
    }
  } catch (error) {
    dispatch(errorUsersAction(error));
  };
};

