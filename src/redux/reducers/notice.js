import produce from 'immer';
import {
  NOTICE_SET,
  NOTICE_RESET,
} from '../constans/constans';

const initialState = {
  status: 'success',
  label: '',
};

export const setNoticeSuccess = (draft, notice) => {
  draft.status = notice.status;
  draft.label = notice.label || notice.message;
  return draft;
};


const resetNoticeSuccess = (draft) => {
  draft.status = 'success';
  draft.label = '';
  return draft;
};

export default (state = initialState, action) => produce(
    state,
    (draft) => {
      switch (action.type) {
        case NOTICE_SET: return setNoticeSuccess(draft, action);
        case NOTICE_RESET: return resetNoticeSuccess(draft);
        default: return state;
      }
    },
);

