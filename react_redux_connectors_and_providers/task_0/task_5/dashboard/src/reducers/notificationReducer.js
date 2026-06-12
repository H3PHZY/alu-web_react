import { Map, fromJS } from "immutable";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";

export const initialState = fromJS({
  notifications: {},
  filter: "DEFAULT",
});

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      const notifications = normalizedData.entities.notifications;
      for (const key in notifications) {
        notifications[key].isRead = false;
      }
      return state.merge({ notifications: fromJS(notifications) });
    case MARK_AS_READ:
      return state.setIn(["notifications", String(action.index), "isRead"], true);
    case SET_TYPE_FILTER:
      return state.set("filter", action.filter);
    default:
      return state;
  }
};
