import "./setupFetch";
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
  loginRequest,
} from "./uiActionCreators";
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("uiActionCreators", () => {
  afterEach(() => {
    if (global.fetch && global.fetch.mockClear) {
      global.fetch.mockClear();
    }
  });

  it("login returns the correct action", () => {
    const action = login("test@test.com", "password123");
    expect(action).toEqual({
      type: LOGIN,
      user: {
        email: "test@test.com",
        password: "password123",
      },
    });
  });

  it("logout returns the correct action", () => {
    const action = logout();
    expect(action).toEqual({
      type: LOGOUT,
    });
  });

  it("displayNotificationDrawer returns the correct action", () => {
    const action = displayNotificationDrawer();
    expect(action).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  it("hideNotificationDrawer returns the correct action", () => {
    const action = hideNotificationDrawer();
    expect(action).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });

  it("loginRequest resolves with login and loginSuccess on successful API call", () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ first_name: "Johann" }),
      })
    );

    const expectedActions = [
      { type: LOGIN, user: { email: "test@test.com", password: "password123" } },
      { type: LOGIN_SUCCESS },
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest("test@test.com", "password123")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("loginRequest resolves with login and loginFailure on failed API call", () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    );

    const expectedActions = [
      { type: LOGIN, user: { email: "test@test.com", password: "password123" } },
      { type: LOGIN_FAILURE },
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest("test@test.com", "password123")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
