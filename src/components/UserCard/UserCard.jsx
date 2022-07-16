import React from 'react';
import {connect} from 'react-redux';
import {Close, Delete, Edit} from '../../assets/img/icons/Sprite';
import * as actions from '../../redux/actions/users';
import './UserCard.scss';
import {bindActionCreators} from 'redux';

const UserCard = ({user, modalMode, changeModalMode, setShowModal}) => {
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
              <button className={'user-card__button'} type={'button'} onClick={() => changeModalMode('edit')}>
                <Edit />
              </button>}
              {modalMode === 'show' &&
              <button className={'user-card__button'} type={'button'}>
                <Delete />
              </button>}
              <button className={'user-card__button'} type={'button'} onClick={() => setShowModal(false)}>
                <Close />
              </button>
            </div>
          </div>
          <div className={'user-card__wrap'}>
            <h3 className={'user-card__label'}>Имя</h3>
            <p className={'user-card__content'}>{user && user.firstName}</p>
            <h3 className={'user-card__label'}>Фамилия</h3>
            <p className={'user-card__content'}>{user && user.lastName}</p>
          </div>
          {modalMode !== 'show' &&
          <div className={'user-card__footer'}>
            <button className={'user-card__cancel'} type={'button'} onClick={() => changeModalMode('show')}>
              Отменить
            </button>
            <button className={'user-card__accept'} type={'button'}>
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
}),
(dispatch) => bindActionCreators(actions, dispatch),
)(UserCard);
