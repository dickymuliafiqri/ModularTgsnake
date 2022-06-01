import { Snake, Composer } from "tgsnake";
import { loadModules } from "./modules";

const composer = new Composer();
const bot = new Snake();

(async () => {
  await loadModules();

  bot.use(composer.middleware());
  bot.run();
  bot.on("connected", () => {
    bot.save();
  });
})();

export { composer, bot };
