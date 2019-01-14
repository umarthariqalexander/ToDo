import { GET_REMINDERS_LIST } from '../actions/HomeActions';

const initialState = {};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REMINDERS_LIST:
      return Object.assign({}, state, { remindersList: action.reminderList });
    default:
      return state;
  }
};

export default homeReducer;
