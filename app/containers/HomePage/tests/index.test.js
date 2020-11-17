/**
 * Test the HomePage
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { HomePage, mapDispatchToProps } from '../index';
import { changeTaskLimit } from '../actions';
import { loadTasks } from '../../App/actions';
import configureStore from '../../../configureStore';

describe('<HomePage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage loading={false} error={false} tasks={[]} />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should fetch the tasks on mount if a taskLimit exists', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage
            taskLimit="Not Empty"
            onChangeUsername={() => {}}
            onSubmitForm={submitSpy}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not call onSubmitForm if taskLimit is an empty string', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage onChangeUsername={() => {}} onSubmitForm={submitSpy} />
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmitForm if taskLimit is null', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage
            taskLimit=""
            onChangeUsername={() => {}}
            onSubmitForm={submitSpy}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeUsername', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeUsername).toBeDefined();
      });

      it('should dispatch changeTaskLimit when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const taskLimit = 'mxstbr';
        result.onChangeUsername({ target: { value: taskLimit } });
        expect(dispatch).toHaveBeenCalledWith(changeTaskLimit(taskLimit));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch loadTasks when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(loadTasks());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
