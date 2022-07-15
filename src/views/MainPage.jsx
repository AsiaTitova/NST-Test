import React from 'react';
import {connect} from 'react-redux';
import Users from '../components/Users/Users';

import './MainPage.scss';

const MainPage = ({}) => {
  return (
    <section className={'main-page'}>
      <Users />
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
