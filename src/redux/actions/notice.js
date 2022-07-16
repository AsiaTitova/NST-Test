import {NOTICE_RESET, NOTICE_SET} from '../constans/constans';

const setNoticeSuccess = (notice) => ({
  type: NOTICE_SET,
  ...notice,
});

export const setNoticeAction = (notice) => (dispatch) => {
  try {
    dispatch(setNoticeSuccess(notice));
  } catch (error) {
    dispatch(setNoticeSuccess({
      status: 'error',
      label: error.message,
    }));
  };
};

const resetNoticeSuccess = (notice, error) => ({
  type: NOTICE_RESET,
  error,
});

export const resetNoticeAction = () => (dispatch) => {
  try {
    dispatch(resetNoticeSuccess(null));
  } catch (error) {
    dispatch(setNoticeSuccess({
      status: 'error',
      label: error.message,
    }));
  };
};
