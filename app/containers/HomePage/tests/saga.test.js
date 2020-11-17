/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_TASKS } from 'containers/App/constants';
import { tasksLoaded, taskLoadingError } from 'containers/App/actions';

import taskListData, { getTasks } from '../saga';

const taskLimit = 'mxstbr';

/* eslint-disable redux-saga/yield-effects */
describe('getTasks Saga', () => {
  let getReposGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getReposGenerator = getTasks();

    const selectDescriptor = getReposGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getReposGenerator.next(taskLimit).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the tasksLoaded action if it requests the data successfully', () => {
    const response = [
      {
        name: 'First repo',
      },
      {
        name: 'Second repo',
      },
    ];
    const putDescriptor = getReposGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(tasksLoaded(response, taskLimit)));
  });

  it('should call the taskLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getReposGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(taskLoadingError(response)));
  });
});

describe('githubDataSaga Saga', () => {
  const githubDataSaga = taskListData();

  it('should start task to watch for LOAD_TASKS action', () => {
    const takeLatestDescriptor = githubDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_TASKS, getTasks));
  });
});
