/**
 * Gets the tasks of the user from Github
 */

import { call, put, select, takeEvery, all } from 'redux-saga/effects';
import { LOAD_TASKS, UPDATE_TASK } from 'containers/App/constants';
import axios from 'axios';
import {
  tasksLoaded,
  taskLoadingError,
  taskUpdated,
  taskUpdatedError
} from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * get tasks request/response handler
 */
export function* getTasks() {
  // Select taskLimit from store
  const taskLimit = yield select(makeSelectUsername());
  const requestURL = `http://localhost:3000/public/tasks?limit=${taskLimit}`;

  try {
    // Call our request helper (see 'utils/request')
    const tasks = yield call(request, requestURL);
    yield put(tasksLoaded(tasks, taskLimit));
  } catch (err) {
    yield put(taskLoadingError(err));
  }
}

/**
 * update task request/response handler
 */
export function* updateTask(action) {
  const requestURL = `http://localhost:3000/public/tasks/${action.taskId}`;

  const apiCall = () => {
    return axios.put(requestURL, {
      status: "done"
    },
    ).then(response => response.data)
      .catch(err => {
        throw err;
      });
  }

  try {
    // Call our request helper (see 'utils/request')
    yield call(apiCall);
    yield put(taskUpdated());
  } catch (err) {
    console.log(err)
    yield put(taskUpdatedError(err));
  }
}

// Added by adrian to support multiples functions
export default function* rootSaga() {
  yield all([
    takeEvery(LOAD_TASKS, getTasks),
    takeEvery(UPDATE_TASK, updateTask)
  ]);
}
