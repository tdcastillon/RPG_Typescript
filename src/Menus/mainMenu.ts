import Game from "../Game/Game";
import clc from "cli-color";

import { prompt } from "enquirer";
import displayQuitMessage from "../Misc/displayQuitMessage";

// functions
import innMenu from "./innMenu";
import partyMenu from "./partyMenu";
import singleCombatScene from "../Scenes/singleCombatScene";

/**
 *
 * @param {Game} game - The game to display the main menu for
 * @returns {Promise<boolean>}
 * @description This function will display the main menu
 */

async function mainMenu(game: Game): Promise<boolean> {
  let in_menu = true;

  const questions = [
    {
      type: "select",
      name: "menu",
      message: "What would you like to do?",
      choices: [
        "Go to Single Battle",
        "Go to Dungeon Selection" + clc.red(" (Not Implemented) "),
        "Go to the Inn",
        "Go to the Shop" + clc.red(" (Not Implemented) "),
        "View Inventory" + clc.red(" (Not Implemented) "),
        "View Party",
        "Save Menu" + clc.red(" (Not Implemented) "),
        "Quit",
      ],
    },
  ];

  while (in_menu) {
    console.clear();
    console.log(clc.blue("Welcome to the Main Menu!"));
    try {
      let answer: { menu: string } = await prompt(questions);

      switch (answer.menu) {
        case "Go to Single Battle":
          let is_dead: boolean = await singleCombatScene(game.Party);
          return is_dead;
        case "Go to the Inn":
          await innMenu(game);
          return false;
        case "View Party":
          await partyMenu(game.Party);
          return false;
        case "Quit":
          displayQuitMessage();
          return true;
        default:
          console.log(clc.red("Not implemented yet"));
          return true;
      }
    } catch (error) {
      clc.red(error);
      return true;
    }
  }
  return false;
}

export default mainMenu;
