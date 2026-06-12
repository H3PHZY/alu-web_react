import { uiReducer, initialState } from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER, LOGIN, LOGOUT } from "../actions/uiActionTypes";
import { SELECT_COURSE } from "../actions/courseActionTypes";

describe("uiReducer", () => {
  it("returns the initial state when no action is passed", () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it("returns the initial state when the action SELECT_COURSE is passed", () => {
    const state = uiReducer(undefined, { type: SELECT_COURSE });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it("changes correctly the isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed", () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.toJS()).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: true,
    });
  });

  it("changes correctly the user property when the action LOGIN is passed", () => {
    const user = { email: 'test@example.com', password: '123' };
    const state = uiReducer(undefined, { type: LOGIN, user });
    expect(state.toJS()).toEqual({
      ...initialState.toJS(),
      user,
    });
  });

  it("changes correctly the user property when the action LOGOUT is passed", () => {
    const state = uiReducer(undefined, { type: LOGOUT });
    expect(state.toJS()).toEqual({
      ...initialState.toJS(),
      user: null,
      isUserLoggedIn: false,
    });
  });
});
