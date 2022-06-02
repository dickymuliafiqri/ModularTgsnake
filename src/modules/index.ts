/**
 * by dickymuliafiqri
 *
 * Used to load all installed modules.
 */

import { readdirSync } from "fs";

// List and import all modules
export const loadModules = async () => {
  const moduleList: Array<string> = readdirSync(__dirname);

  const loadedModules: Array<string> = await new Promise((resolve) => {
    let modules: Array<string> = [];
    moduleList.forEach(async (moduleName) => {
      if (/\.js$/i.exec(moduleName)) {
        if (moduleName === "index.js") return;

        await import(`./${moduleName}`)
          .then(() => {
            if (!(modules.length % 3)) modules.push(`\n${moduleName}`);
            else modules.push(moduleName);
          })
          .catch((err) => {
            console.error(`Failed to load module ${moduleName}\n`, err);
            process.exit(1);
          });
        resolve(modules);
      }
    });
  });

  console.log(`🔌 Loaded modules: ${loadedModules.length}${loadedModules.join(" | ")}`);
};
