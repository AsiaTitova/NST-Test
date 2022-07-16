import React, {useState} from 'react';
import {Plus} from '../../assets/img/icons/Sprite';

import './Users.scss';
import UsersTable from '../UsersTable/UsersTable';
import UserCard from '../UserCard/UserCard';

const Users = () => {
  const [modalMode, setModalMode] = useState('show');
  const [showModal, setShowModal] = useState(false);

  const changeModalMode = (val) => {
    setModalMode(val);
  };

  const openCreateModal = () => {
    changeModalMode('create');
    setShowModal(true);
  };

  return (
    <React.Fragment>
      <div className={'users'}>
        <div className={'users__head'}>
          <h1 className={'users__title'}>Список сотрудников</h1>
          <button className={'users__button'} type={'button'} onClick={() => openCreateModal()}>
            <Plus />
          </button>
        </div>
        <UsersTable changeModalMode={changeModalMode} setShowModal={setShowModal} />
        {showModal && <UserCard modalMode={modalMode} changeModalMode={changeModalMode} setShowModal={setShowModal} />}
      </div>
    </React.Fragment>
  );
};

export default Users;
