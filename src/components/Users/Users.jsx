import React from 'react';
import {Plus} from '../../assets/img/icons/Sprite';

import './Users.scss';
import UsersTable from '../UsersTable/UsersTable';

const Users = () => {
  return (
    <React.Fragment>
      <div className={'users'}>
        <div className={'users__head'}>
          <h1 className={'users__title'}>Список сотрудников</h1>
          <button className={'users__button'} type={'button'}>
            <Plus />
          </button>
        </div>
        <UsersTable />
      </div>
    </React.Fragment>
  );
};

export default Users;
