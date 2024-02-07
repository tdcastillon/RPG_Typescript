import clc from "cli-color";
import Hero from "./Hero";
import { prompt } from "enquirer";
import pressContinue from "../Misc/pressContinue";
import Stats from "../Stats/Stats";

/**
 *
 * @param {Hero} hero - The hero to display the stats for
 * @returns {void} - This function does not return anything
 * @description This function will display the stats for the hero
 */

async function displayStats(hero: Hero): Promise<void> {
  console.clear();

  console.log(
    clc.blue("Welcome to the Stats for ") + clc.green(hero.name) + clc.blue("!")
  );

  console.log("\n/----------Name----------\\");
  console.log("Name: " + clc.green(hero.name));

  console.log("\n/----------JOB----------\\");
  console.log(
    "Job: " +
      clc.yellow(hero._job.getName()) +
      " Lv. " +
      clc.red(hero._job.getStats("LVL"))
  );

  console.log("\n/----------EXP----------\\");
  console.log(
    "EXP: " +
      clc.magenta(hero._job.getStats("EXP")) +
      "/" +
      clc.magentaBright(hero._job.getStats("FULL_EXP"))
  );

  console.log("\n\n/--------LIFE--------\\");

  console.log(
    "HP: " +
      clc.green(hero._job.getStats("HP")) +
      "/" +
      clc.greenBright(hero._job.getStats("MAX_HP"))
  );
  console.log(
    "MP: " +
      clc.blue(hero._job.getStats("MP")) +
      "/" +
      clc.blueBright(hero._job.getStats("MAX_MP"))
  );

  console.log("\n/--------STATS--------\\");
  const stats_to_display: Array<keyof Stats> = ["ATK", "DEF", "MAT", "MDF"];
  stats_to_display.forEach((stat) => {
    console.log(stat + ": " + clc.red(hero._job.getStats(stat)));
  });

  await pressContinue();
  Promise.resolve();
}

export default displayStats;
