import { CATEGORY } from "./constant";
import { J_MAE_LIST } from "./constant-data/j-mae.constant";

export const categoryDecipher = (msg: any) => {
  for (const category of CATEGORY) {
    const { key, value } = category;

    if (msg.toLowerCase().includes(key)) return value;
  }
};

export const jMae = (msgContext: any, msg: string) => {
  return msgContext.channel.send(whatToJ(msg));
};

export const whatToJ = (msg: string) => {
  for (const { name, reply } of J_MAE_LIST) {
    if (msg.includes(name)) return reply;
  }

  return "WHO THE FUCK IS THAT?";
};

export const howToThank = (msg: string) => {
  return "Thanks boss Chheung";
};
