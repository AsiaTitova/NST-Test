import {USERS_ERROR, USERS_GET, USERS_LOAD} from '../constans/constans';
import {getUsers} from '../../api/api';

const loadingUsersAction = () => ({
  type: USERS_LOAD,
  loading: true,
});

const errorUsersAction = (error) => ({
  type: USERS_ERROR,
  loading: false,
  error,
});

const getUsersSuccess = (users, error) => ({
  type: USERS_GET,
  users,
  loading: false,
  error,
});

export const getUsersList = () => async (dispatch) => {
  try {
    dispatch(loadingUsersAction());
    const resp = await getUsers();
    console.log(resp.data);
    dispatch(getUsersSuccess(resp.data, ''));
  } catch (error) {
    dispatch(errorUsersAction(error));
  };
};
