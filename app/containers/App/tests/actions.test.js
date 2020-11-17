import { LOAD_TASKS, LOAD_TASKS_SUCCESS, LOAD_TASKS_ERROR } from '../constants';

import { loadTasks, tasksLoaded, taskLoadingError } from '../actions';

describe('App Actions', () => {
  describe('loadTasks', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_TASKS,
      };

      expect(loadTasks()).toEqual(expectedResult);
    });
  });

  describe('tasksLoaded', () => {
    it('should return the correct type and the passed tasks', () => {
      const fixture = ['Test'];
      const taskLimit = 'test';
      const expectedResult = {
        type: LOAD_TASKS_SUCCESS,
        tasks: fixture,
        taskLimit,
      };

      expect(tasksLoaded(fixture, taskLimit)).toEqual(expectedResult);
    });
  });

  describe('taskLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_TASKS_ERROR,
        error: fixture,
      };

      expect(taskLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
