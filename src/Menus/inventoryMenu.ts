import clc from "cli-color"
import { prompt } from "enquirer"
import Party from "../Party/Party";
import displayInventory from "../Inventory/Function/displayInventory";
import waitTime from "../Misc/waitTime";

/**
 * @param {party} party - the party of the player
*/

async function inventoryMenu(party: Party): Promise<void> {
    let in_menu = true;
    const questions = [
        {
            type: "select",
            name: "menu",
            message: "What would you like to do?",
            choices: [
                "View Inventory",
                "View Equipment" + clc.red(" (Not Implemented) "),
                "Leave",
            ],
        },
    ];

    while(in_menu) {
        console.clear();

        console.log(
            clc.blue("Welcome to the Inventory Menu!")
        );

        try {
            let answer: { menu: string } = await prompt(questions);

            switch(answer.menu) {
                case "View Inventory":
                    if (party.inventory.length === 0) {
                        console.log(clc.red("Your inventory is empty!"));
                        await waitTime(2)
                        in_menu = false;
                        break;
                    } else
                        await displayInventory(party)
                    break;
                case "Leave":
                    in_menu = false;
                    break;
                default:
                    console.log(clc.red("Not Implemented"));
                    break;
            }
        } catch(err) {
            console.log(clc.bgRed(err));
            return;
        }
    }
}

export default inventoryMenu