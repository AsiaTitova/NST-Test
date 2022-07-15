import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Delete, Edit, User} from '../../assets/img/icons/Sprite';
import * as actions from '../../redux/actions/users';
import './UsersTable.scss';
import {bindActionCreators} from 'redux';

const UsersTable = ({users, getUsersList}) => {
  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <React.Fragment>
      <div className={'users__users-table users-table'}>
        <div className={'users-table__head'}>
          <div className={'users-table__th users-table__th_name'}>Имя</div>
          <div className={'users-table__th'}>Фамилия</div>
          <div className={'users-table__th'}></div>
        </div>
        {users && users.length && users.map((user, index) => (<div className={'users-table__row'} key={index}>
          <div className={'users-table__cell users-table__cell_name'}>
            <User />
            <span>{user.firstName}</span>
          </div>
          <div className={'users-table__cell'}>{user.lastName}</div>
          <div className={'users-table__cell'}>
            <button className={'users-table__button users-table__button_edit'} type={'button'}>
              <Edit />
            </button>
            <button className={'users-table__button'} type={'button'}>
              <Delete />
            </button>
          </div>
        </div>))}
      </div>
    </React.Fragment>
  );
};

export default connect((state) => ({
  users: state.users.users,
}),
(dispatch) => bindActionCreators(actions, dispatch),
)(UsersTable);
