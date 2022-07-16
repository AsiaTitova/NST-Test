import React from 'react';
import {connect} from 'react-redux';
import Users from '../components/Users/Users';

import './MainPage.scss';
import Notification from '../components/Notification/Notification';

const MainPage = ({}) => {
  return (
    <section className={'main-page'}>
      <Users />
      <Notification />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
