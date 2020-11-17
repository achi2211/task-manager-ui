/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_TASKS_SUCCESS,
  LOAD_TASKS,
  LOAD_TASKS_ERROR,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    tasks: false,
  },
  task_update: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_TASKS:
        draft.loading = true;
        draft.error = false;
        draft.userData.tasks = false;
        break;

      case LOAD_TASKS_SUCCESS:
        draft.userData.tasks = action.tasks;
        draft.loading = false;
        draft.currentUser = action.taskLimit;
        break;

      case LOAD_TASKS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case UPDATE_TASK:
        draft.error = false;
        draft.task_update = false;
        break;

      case UPDATE_TASK_SUCCESS:
        draft.task_update = true;
        draft.error = false;
        draft.loading = false;
        break;

      case UPDATE_TASK_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
