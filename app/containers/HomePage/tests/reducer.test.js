import produce from 'immer';

import homeReducer from '../reducer';
import { changeTaskLimit } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      taskLimit: '',
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeTaskLimit action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = produce(state, draft => {
      draft.taskLimit = fixture;
    });

    expect(homeReducer(state, changeTaskLimit(fixture))).toEqual(expectedResult);
  });
});
