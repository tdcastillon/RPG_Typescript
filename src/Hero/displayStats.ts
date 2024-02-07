import clc from "cli-color";
import Hero from "./Hero";
import { prompt } from "enquirer";

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
  console.log("ATK: " + clc.redBright(hero._job.getStats("ATK")));
  console.log("DEF: " + clc.redBright(hero._job.getStats("DEF")));
  console.log("MAT: " + clc.redBright(hero._job.getStats("MAT")));
  console.log("MDF: " + clc.redBright(hero._job.getStats("MDF")));

  console.log("Press any key to continue");
  const questions = [
    {
      type: "input",
      name: "continue",
      message: "Press any key to continue",
    },
  ];
  let answer: { continue: string } = await prompt(questions);
  Promise.resolve();
}

export default displayStats;
