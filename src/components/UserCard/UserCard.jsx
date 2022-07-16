import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Close, Delete, Edit} from '../../assets/img/icons/Sprite';
import * as actions from '../../redux/actions/users';
import './UserCard.scss';
import {bindActionCreators} from 'redux';

const UserCard = ({user, users, modalMode, changeModalMode, setShowModal, createUserAction}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const closeModal = () => {
    changeModalMode('show');
    setShowModal(false);
  };

  const changeFirstName = (evt) => {
    setFirstName(evt.target.value);
  };

  const changeLastName = (evt) => {
    setLastName(evt.target.value);
  };

  const handleAccept = () => {
    createUserAction({
      firstName: firstName,
      lastName: lastName,
    });
    closeModal();
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
                onClick={() => changeModalMode('edit')}
              >
                <Edit />
              </button>}
              {modalMode === 'show' &&
              <button
                className={'user-card__button'}
                type={'button'}
              >
                <Delete />
              </button>}
              <button
                className={'user-card__button'}
                type={'button'}
                onClick={() => closeModal()}
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
              className={'user-card__input'}
              id={'firstName'}
              value={firstName}
              onChange={changeFirstName}
            />}
            <h3 className={'user-card__label'}>Фамилия</h3>
            {modalMode === 'show' && <p className={'user-card__content'}>{user && user.lastName}</p>}
            {modalMode !== 'show' &&
            <input
              type={'text'}
              className={'user-card__input'}
              id={'lastName'}
              value={lastName}
              onChange={changeLastName}
            />}
          </div>
          {modalMode !== 'show' &&
          <div className={'user-card__footer'}>
            <button
              className={'user-card__cancel'}
              type={'button'}
              onClick={() => changeModalMode('show')}
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
(dispatch) => bindActionCreators(actions, dispatch),
)(UserCard);
