import {
  markAsAread,
  setNotificationFilter,
} from "./notificationActionCreators";
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from "./notificationActionTypes";

describe("notificationActionCreators", () => {
  it("markAsAread returns the correct action", () => {
    const action = markAsAread(1);
    expect(action).toEqual({
      type: MARK_AS_READ,
      index: 1,
    });
  });

  it("setNotificationFilter returns the correct action", () => {
    const action = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    expect(action).toEqual({
      type: SET_TYPE_FILTER,
      filter: "DEFAULT",
    });
  });
});
