import { notificationReducer, initialState } from "./notificationReducer";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";

describe("notificationReducer", () => {
  it("returns the default state", () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it("returns the data passed with isRead false for FETCH_NOTIFICATIONS_SUCCESS", () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", value: "New data available" },
      ],
    };
    const expectedData = {
      filter: "DEFAULT",
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" },
      ],
    };
    const state = notificationReducer(undefined, action);
    expect(state).toEqual(expectedData);
  });

  it("returns the data with the right item updated for MARK_AS_READ", () => {
    const initialStateData = {
      filter: "DEFAULT",
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" },
      ],
    };
    const action = { type: MARK_AS_READ, index: 2 };
    const expectedData = {
      filter: "DEFAULT",
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: true, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" },
      ],
    };
    const state = notificationReducer(initialStateData, action);
    expect(state).toEqual(expectedData);
  });

  it("returns the data with the right filter updated for SET_TYPE_FILTER", () => {
    const initialStateData = {
      filter: "DEFAULT",
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" },
      ],
    };
    const action = { type: SET_TYPE_FILTER, filter: "URGENT" };
    const expectedData = {
      filter: "URGENT",
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" },
      ],
    };
    const state = notificationReducer(initialStateData, action);
    expect(state).toEqual(expectedData);
  });
});
