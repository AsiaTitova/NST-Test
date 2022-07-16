import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Delete, Edit, User} from '../../assets/img/icons/Sprite';
import * as actions from '../../redux/actions/users';
import './UsersTable.scss';
import {bindActionCreators} from 'redux';
import Loader from '../Loader/Loader';

const UsersTable = ({
  users,
  loading,
  getUsersAction,
  getUserAction,
  changeModalMode,
  setShowModal,
  deleteUserAction,
}) => {
  useEffect(() => {
    return () => getUsersAction();
  }, []);

  const openUserInfo = (id) => {
    getUserAction(id);
    setShowModal(true);
    changeModalMode('show');
  };

  const editHandler = (id) => {
    getUserAction(id);
    setShowModal(true);
    changeModalMode('edit');
  };

  const deleteHandler = (evt, id) => {
    evt.stopPropagation();
    deleteUserAction(id);
  };

  return (
    <React.Fragment>
      <div className={'users__users-table users-table'}>
        <div className={'users-table__head'}>
          <div className={'users-table__th users-table__th_name'}>Имя</div>
          <div className={'users-table__th'}>Фамилия</div>
          <div className={'users-table__th'}></div>
        </div>
        {loading && <Loader />}
        {!loading && users && users.length ? users.map((user, index) => (
          <div
            className={'users-table__row'}
            key={index}
            onClick={() => openUserInfo(user.id)}
          >
            <div className={'users-table__cell users-table__cell_name'}>
              <User />
              <span className={'users-table__label'}>Имя</span>
              <span className={'users-table__info'}>{user.firstName}</span>
            </div>
            <div className={'users-table__cell users-table__cell_last-name'}>
              <span className={'users-table__label'}>Фамилия</span>
              <span className={'users-table__info'}>{user.lastName}</span>
            </div>
            <div className={'users-table__cell users-table__cell_control'}>
              <button
                className={'users-table__button users-table__button_edit'}
                type={'button'}
                onClick={() => editHandler(user.id)}
              >
                <Edit />
              </button>
              <button
                className={'users-table__button'}
                type={'button'}
                onClick={(evt) => deleteHandler(evt, user.id)}
              >
                <Delete />
              </button>
            </div>
          </div>)) :
          !loading ?
          <div className={'users-table__empty'}>
            <p className={'users-table__content'}>Пусто :(</p>
          </div> :
            '' }
      </div>
    </React.Fragment>
  );
};

export default connect((state) => ({
  users: state.users.users,
  loading: state.users.loading,
}),
(dispatch) => bindActionCreators(actions, dispatch),
)(UsersTable);
