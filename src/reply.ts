import { categoryDecipher, whatToJ } from "./helper";
import { CATEGORY_TYPES } from "./type";

export const checkCategory = (msg: string): CATEGORY_TYPES | null => {
  const category = categoryDecipher(msg);
  if (!category) return null;

  return category;
};

export const whatToReply = (msgContext: any, msg: string) => {
  const category = checkCategory(msg);
  if (!category)
    return reply(msgContext, "I DONT UNDERSTAND UR FUCKING COMMENT?");

  return whatToDoWithCategory(msgContext, msg, category);
};

export const whatToDoWithCategory = (
  msgContext: any,
  msg: string,
  category: CATEGORY_TYPES
) => {
  switch (category) {
    case "J_MAE":
      return reply(msgContext, whatToJ(msg));
    default:
      return null;
  }
};

export const reply = (msgContext: any, msg: string) => {
  return msgContext.channel.send(msg);
};
