import { random } from "./common";
import { SPECIAL_KEYWORDS } from "./constant-data/special-keywords";
import { whatToReply } from "./reply";

const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const commandPrefix = "!";
client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log(`${client.user.tag}: LETS GO!`);
});

client.on("message", (msg: any) => {
  if (msg.content?.[0] !== "!") return;

  // put special cond somewhere else
  const specialKeywords = ["kmav", "kmao"];
  if (specialKeywords.some((sk) => msg.content?.toLowerCase()?.includes(sk)))
    return msg.channel.send(
      random(SPECIAL_KEYWORDS.find((s) => s.key === "KMAO")!.value)
    );

  return whatToReply(msg, msg.content);
});
