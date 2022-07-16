import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import {Info} from '../../assets/img/icons/Sprite';

import './Notification.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/actions/notice';
import {CSSTransition} from 'react-transition-group';

const Notification = ({notification, resetNoticeAction}) => {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    if (notification && notification?.label.length) {
      setShowNotice(true);
      setTimeout(() => {
        closeNotification();
      }, 5000);
    }
  });

  const setClass = () => {
    switch (notification?.status) {
      case 'error': return 'error';
      case 'success': return 'success';
      default: return 'success';
    };
  };

  const closeNotification = async () => {
    await setShowNotice(false);
    resetNoticeAction();
  };

  return (
    <React.Fragment>
      <CSSTransition
        in={showNotice}
        timeout={500}
        classNames="notification"
        mountOnEnter
        unmountOnExit
        onExited={() => setShowNotice(false)}
      >
        <div
          className={classNames(
              'notification',
              `notification_${setClass()}`
          )}
          onClick={closeNotification}>
          <Info />
          <p className={'notification__content'}>{notification && notification.label}</p>
        </div>
      </CSSTransition>
    </React.Fragment>
  );
};
export default connect((state) => ({
  notification: state.notice,
}),
(dispatch) => bindActionCreators(actions, dispatch),
)(Notification);
