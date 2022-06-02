/**
 * by dickymuliafiqri
 *
 * Ping -> Pong
 */

import { composer, bot } from "..";
import { helpList } from "../helper/help";
const ping = require("ping");

composer.cmd("ping", async (ctx) => {
  ctx.reply(`⚾`).then(async (res) => {
    const msgId = res?.message.id;
    const pingRes = await ping.promise.probe("google.com");
    const pongMsg = `Pong 🏓\n${pingRes.time} ms`;
    if (msgId) {
      bot.telegram.editMessage(ctx.chat.id, msgId, pongMsg);
    } else {
      ctx.reply(pongMsg);
    }
  });
});

helpList.push({
  command: "/ping",
  desc: "Check bot response time",
});
