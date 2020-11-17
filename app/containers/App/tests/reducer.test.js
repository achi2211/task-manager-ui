import produce from 'immer';

import appReducer from '../reducer';
import { loadTasks, tasksLoaded, taskLoadingError } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      currentUser: false,
      userData: {
        tasks: false,
      },
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadTasks action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
      draft.userData.tasks = false;
    });

    expect(appReducer(state, loadTasks())).toEqual(expectedResult);
  });

  it('should handle the tasksLoaded action correctly', () => {
    const fixture = [
      {
        name: 'My Repo',
      },
    ];
    const taskLimit = 'test';
    const expectedResult = produce(state, draft => {
      draft.userData.tasks = fixture;
      draft.loading = false;
      draft.currentUser = taskLimit;
    });

    expect(appReducer(state, tasksLoaded(fixture, taskLimit))).toEqual(
      expectedResult,
    );
  });

  it('should handle the taskLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.loading = false;
    });

    expect(appReducer(state, taskLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
