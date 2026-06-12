import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from "./notificationSelector";
import { notificationReducer } from "../reducers/notificationReducer";
import { FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";

describe("notification selectors", () => {
  const state = notificationReducer(undefined, {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", value: "New data available" },
    ],
  });
  
  const stateWithRead = state.setIn(["notifications", "2", "isRead"], true);

  it("filterTypeSelected works as expected", () => {
    expect(filterTypeSelected(stateWithRead)).toEqual("DEFAULT");
  });

  it("getNotifications returns a list of the message entities within the reducer", () => {
    expect(getNotifications(stateWithRead).toJS()).toEqual({
      1: { id: 1, type: "default", value: "New course available", isRead: false },
      2: { id: 2, type: "urgent", value: "New resume available", isRead: true },
      3: { id: 3, type: "urgent", value: "New data available", isRead: false },
    });
  });

  it("getUnreadNotifications returns a list of unread notifications within the reducer", () => {
    expect(getUnreadNotifications(stateWithRead).toJS()).toEqual({
      1: { id: 1, type: "default", value: "New course available", isRead: false },
      3: { id: 3, type: "urgent", value: "New data available", isRead: false },
    });
  });
});
