import clc from "cli-color";
import { prompt } from "enquirer";

import Hero from "../Hero/Hero";
import Party from "../Party/Party";
import displayStats from "../Hero/Stats/displayStats";
import displayEquipment from "../Hero/Equipment/displayEquipment";

/**
 *
 * @param {Hero} hero - The hero to display the menu for
 * @param {Party} party - The party the hero is in
 * @returns {Promise<void>} - A promise that resolves when the menu is done
 *  This function will display the hero menu
 */

async function heroMenu(hero: Hero, party: Party): Promise<void> {
  let in_menu = true;
  const questions = [
    {
      type: "select",
      name: "menu",
      message: "What would you like to do?",
      choices: [
        "View Stats",
        "View Equipment",
        "View Skills" + clc.red(" (Not Implemented) "),
        "Dismiss" + clc.red(" (Not Implemented) "),
        "Leave",
      ],
    },
  ];

  while (in_menu) {
    console.clear();

    console.log(
      clc.blue("Welcome to the Menu for ") +
        clc.green(hero.getName()) +
        clc.blue("!")
    );

    try {
      let answer: { menu: string } = await prompt(questions);

      switch (answer.menu) {
        case "View Stats":
          await displayStats(hero);
          break;
        case "View Equipment":
          await displayEquipment(party, hero)
          break;
        case "Leave":
          in_menu = false;
          break;
        default:
          console.log(clc.red("Not Implemented"));
          break;
      }
    } catch (err) {
      console.log(clc.bgRed(err));
      return;
    }
  }
}

export default heroMenu;
