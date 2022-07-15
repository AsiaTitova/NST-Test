import React from 'react';
import {connect} from 'react-redux';

const Main = ({}) => {
  return (
    <React.Fragment>
      <div>123</div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
