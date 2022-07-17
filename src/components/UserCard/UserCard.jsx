import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Close, Delete, Edit} from '../../assets/img/icons/Sprite';
import * as actions from '../../redux/actions/users';
import * as notice from '../../redux/actions/notice';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';

import './UserCard.scss';

const UserCard = ({
  user,
  modalMode,
  changeModalMode,
  setShowModal,
  createUserAction,
  updateUserAction,
  deleteUserAction,
  setNoticeAction,
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const closeModal = () => {
    changeModalMode('show');
    setShowModal(false);
  };

  const editHandler = () => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    changeModalMode('edit');
  };


  const deleteHandler = () => {
    deleteUserAction(user.id);
    closeModal();
  };

  const changeFirstName = (evt) => {
    setFirstName(evt.target.value);
  };

  const changeLastName = (evt) => {
    setLastName(evt.target.value);
  };

  const handleAccept = () => {
    switch (modalMode) {
      case 'edit': return updateAction();
      case 'create': return createAction();
      default: return false;
    };
  };

  const handleCancel = () => {
    switch (modalMode) {
      case 'edit': return changeModalMode('show');
      case 'create': return closeModal();
      default: return false;
    };
  };

  const updateAction = () => {
    const body = {
      ...user,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
    };
    if (!validation(body)) return false;
    updateUserAction(body);
    changeModalMode('show');
  };

  const createAction = () => {
    const body = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
    };
    if (!validation(body)) return false;
    createUserAction(body);
    closeModal();
  };

  const validation = (val) => {
    if (!val.firstName.length) {
      setNoticeAction({
        status: 'error',
        label: 'Поле имя должно быть заполнено!',
      });
      setFirstNameError(true);
      return false;
    }
    if (!val.firstName.length > 50) {
      setNoticeAction({
        status: 'error',
        label: 'Поле имя должно содержать не более 50 символов!',
      });
      setFirstNameError(true);
      return false;
    }
    if (!val.lastName.length) {
      setNoticeAction({
        status: 'error',
        label: 'Поле фамилия должно быть заполнено!',
      });
      setLastNameError(true);
      return false;
    }

    if (!val.lastName.length > 50) {
      setNoticeAction({
        status: 'error',
        label: 'Поле фамилия должно содержать не более 50 символов!',
      });
      setLastNameError(true);
      return false;
    }
    setFirstNameError(false);
    setLastNameError(false);
    return true;
  };

  return (
    <React.Fragment>
      <div className={'user-card'}>
        <div className={'user-card__modal'}>
          <div className={'user-card__head'}>
            <h2 className={'user-card__title'}>
              {modalMode === 'create' ?
                'Создать сотрудника' :
                modalMode === 'edit' ?
                  'Редактировать сотрудника' :
                  'Сотрудник'}
            </h2>
            <div className={'user-card__control-panel'}>
              {modalMode === 'show' &&
              <button
                className={'user-card__button'}
                type={'button'}
                onClick={editHandler}
              >
                <Edit />
              </button>}
              {modalMode === 'show' &&
              <button
                className={'user-card__button'}
                type={'button'}
                onClick={deleteHandler}
              >
                <Delete />
              </button>}
              <button
                className={'user-card__button'}
                type={'button'}
                onClick={closeModal}
              >
                <Close />
              </button>
            </div>
          </div>
          <div className={'user-card__wrap'}>
            <h3 className={'user-card__label'}>Имя</h3>
            {modalMode === 'show' && <p className={'user-card__content'}>{user && user.firstName}</p>}
            {modalMode !== 'show' &&
            <input
              type={'text'}
              className={ classNames(
                  'user-card__input user-card__input_name',
                  {'user-card__input_error': firstNameError}
              )}
              id={'firstName'}
              maxLength={50}
              value={firstName}
              placeholder={'Имя сотрудника'}
              onChange={changeFirstName}
            />}
            <h3 className={'user-card__label'}>Фамилия</h3>
            {modalMode === 'show' && <p className={'user-card__content'}>{user && user.lastName}</p>}
            {modalMode !== 'show' &&
            <input
              type={'text'}
              className={classNames(
                  'user-card__input',
                  {'user-card__input_error': lastNameError}
              )}
              id={'lastName'}
              maxLength={50}
              value={lastName}
              placeholder={'Фамилия сотрудника'}
              onChange={changeLastName}
            />}
          </div>
          {modalMode !== 'show' &&
          <div className={'user-card__footer'}>
            <button
              className={'user-card__cancel'}
              type={'button'}
              onClick={handleCancel}
            >
              Отменить
            </button>
            <button
              className={'user-card__accept'}
              type={'button'}
              onClick={handleAccept}
            >
              {modalMode === 'create' ? 'Создать' : 'Сохранить'}
            </button>
          </div>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default connect((state) => ({
  user: state.users.user,
  users: state.users.users,
}),
(dispatch) => bindActionCreators({...actions, ...notice}, dispatch),
)(UserCard);
