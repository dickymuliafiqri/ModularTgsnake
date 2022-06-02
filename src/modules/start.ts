/**
 * by dickymuliafiqri
 *
 * Y know
 */

import { composer } from "..";
import { helpList } from "../helper/help";

composer.cmd("start", async (ctx) => {
  ctx.replyWithHTML(`WIP!, visit this <a href="https://github.com/dickymuliafiqri/ModularTgsnake">repo</a>`);
});

helpList.push({
  command: "/start",
  desc: "Get bot start message",
});
