import { Snake, Composer } from "tgsnake";
import { loadModules } from "./modules";
import { PH } from "./helper/telegraph";

const composer = new Composer();
const bot = new Snake();
const telegraph = new PH();

(async () => {
  await loadModules();
  await telegraph.createAccount();
  await telegraph.createHelp();

  bot.use(composer.middleware());
  bot.run();
  bot.on("connected", async () => {
    bot.save();
  });
})();

export { composer, bot, telegraph };
