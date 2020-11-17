/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_TASKS = 'boilerplate/App/LOAD_TASKS';
export const LOAD_TASKS_SUCCESS = 'boilerplate/App/LOAD_TASKS_SUCCESS';
export const LOAD_TASKS_ERROR = 'boilerplate/App/LOAD_TASKS_ERROR';

export const UPDATE_TASK = 'boilerplate/App/UPDATE_TASK';
export const UPDATE_TASK_SUCCESS = 'boilerplate/App/UPDATE_TASK_SUCCESS';
export const UPDATE_TASK_ERROR = 'boilerplate/App/UPDATE_TASK_ERROR';
