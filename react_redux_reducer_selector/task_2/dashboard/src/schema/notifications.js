import * as notificationsData from "../../notifications.json";
import { schema, normalize } from "normalizr";

const user = new schema.Entity("users");

const message = new schema.Entity("messages", {}, { idAttribute: "guid" });

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalized = normalize(notificationsData.default, [notification]);

export const getAllNotificationsByUser = (userId) => {
  return normalized.result.reduce((acc, id) => {
    const notification = normalized.entities.notifications[id];
    if (notification.author === userId) {
      acc.push(normalized.entities.messages[notification.context]);
    }
    return acc;
  }, []);
};
