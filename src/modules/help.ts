/**
 * by dickymuliafiqri
 *
 * List help message of registered module
 */

import { composer, telegraph } from "..";
import { helpList } from "../helper/help";

composer.cmd("help", (ctx) => {
  ctx.reply(`Go to this page for complete list of help!`, {
    replyMarkup: {
      inlineKeyboard: [
        [
          {
            text: "Visit Page 📚",
            url: telegraph.helpUrl,
          },
        ],
      ],
    },
  });
});

helpList.push({
  command: "/help",
  desc: "This page",
});
