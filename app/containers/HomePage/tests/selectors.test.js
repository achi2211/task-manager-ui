import { selectHome, makeSelectUsername } from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = {
      userData: {},
    };
    const mockedState = {
      home: homeState,
    };
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectUsername', () => {
  const usernameSelector = makeSelectUsername();
  it('should select the taskLimit', () => {
    const taskLimit = 'mxstbr';
    const mockedState = {
      home: {
        taskLimit,
      },
    };
    expect(usernameSelector(mockedState)).toEqual(taskLimit);
  });
});
