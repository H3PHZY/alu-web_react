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
  const { entities } = normalized;
  return Object.values(entities.notifications)
    .filter((n) => n.author === userId)
    .map((n) => entities.messages[n.context]);
};
