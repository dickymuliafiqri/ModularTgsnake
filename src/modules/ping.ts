/**
 * by dickymuliafiqri
 *
 * Ping -> Pong
 */

import { composer, bot } from "..";
const ping = require("ping");

composer.cmd("ping", async (ctx) => {
  ctx.reply(`Wait...`).then(async (res) => {
    const msgId = res?.message.id;
    let pingRes = await ping.promise.probe("google.com");
    if (msgId) {
      bot.telegram.editMessage(ctx.chat.id, res?.message.id, `Pong 🏓\n${pingRes.time} ms`);
    } else {
      ctx.reply(`Pong 🏓\n${pingRes.time} ms`);
    }
  });
});
