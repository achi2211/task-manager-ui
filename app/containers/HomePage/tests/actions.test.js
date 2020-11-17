import { CHANGE_TASKS_LIMIT } from '../constants';

import { changeTaskLimit } from '../actions';

describe('Home Actions', () => {
  describe('changeTaskLimit', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_TASKS_LIMIT,
        taskLimit: fixture,
      };

      expect(changeTaskLimit(fixture)).toEqual(expectedResult);
    });
  });
});
