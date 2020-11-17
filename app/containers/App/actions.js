/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_TASKS,
  LOAD_TASKS_SUCCESS,
  LOAD_TASKS_ERROR,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_ERROR,
} from './constants';

/**
 * Load the tasks, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_TASKS
 */
export function loadTasks() {
  return {
    type: LOAD_TASKS,
  };
}

/**
 * Dispatched when the tasks are loaded by the request saga
 *
 * @param  {array} tasks The
 * @param  {int} limit The current limit
 *
 * @return {object}      An action object with a type of LOAD_TASKS_SUCCESS passing the tasks
 */
export function tasksLoaded(tasks, limit) {
  return {
    type: LOAD_TASKS_SUCCESS,
    tasks,
    limit,
  };
}

/**
 * Dispatched when loading the tasks fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_TASKS_ERROR passing the error
 */
export function taskLoadingError(error) {
  return {
    type: LOAD_TASKS_ERROR,
    error,
  };
}

/**
 * update the tasks, this action starts the request saga
 *
 * @return {object} An action object with a type of TASK
 */
export function updateTask(taskId) {
  return {
    type: UPDATE_TASK,
    taskId
  };
}

/**
* Dispatched when the task are updated by the request saga
*
* @return {object} An action object with a type of LOAD_TASKS_SUCCESS passing the tasks
*/
export function taskUpdated() {
 return {
   type: UPDATE_TASK_SUCCESS,
 };
}

/**
 * Dispatched when loading the tasks fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_TASKS_ERROR passing the error
 */
export function taskUpdatedError(error) {
  return {
    type: UPDATE_TASK_ERROR,
    error,
  };
}
