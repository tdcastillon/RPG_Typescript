import clc from "cli-color";
import Party from "../Party/Party";

import { prompt } from "enquirer";
import getPartyMembers from "../Party/getPartyMembers";
import Hero from "../Hero/Hero";
import selectHeroParty from "../Party/selectHeroParty";
import heroMenu from "./heroMenu";

/**
 *
 * @param {Party} party - The party to display the menu for
 * @returns {Promise<void>} - A promise that resolves when the menu is done
 * @description This function will display the party menu
 */

async function partyMenu(party: Party): Promise<void> {
  switch (party.length) {
    case 0:
        Promise.reject("No party members");
    case 1:
      let hero: Hero | null = selectHeroParty(party, 0);
      if (hero === null) return;
      await heroMenu(hero, party);
      break;
    default:
      let in_menu = true;

      while (in_menu) {
        console.clear();
        console.log(clc.blue("Welcome to the Party Menu!"));

        let choices = getPartyMembers(party);
        choices.push("Leave");

        const questions = [
          {
            type: "select",
            name: "menu",
            message: "What would you like to do?",
            choices: choices,
          },
        ];

        try {
          let answer: { menu: string } = await prompt(questions);
          switch (answer.menu) {
            case "Leave":
              in_menu = false;
              break;
            default:
              let hero: Hero | null = selectHeroParty(
                party,
                choices.indexOf(answer.menu) - 1
              );
              if (hero === null) return;
              await heroMenu(hero, party);
              break;
          }
        } catch (err) {
          console.log(clc.bgRed(err));
          return;
        }
      }
  }
}

export default partyMenu;
