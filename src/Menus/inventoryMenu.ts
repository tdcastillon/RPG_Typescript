import clc from "cli-color"
import { prompt } from "enquirer"
import Party from "../Party/Party";
import displayInventory from "../Inventory/Function/displayInventory";
import waitTime from "../Misc/waitTime";
import displayEquipmentInventory from "../Inventory/Function/displayEquipmentInventory";

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
                "View Equipment",
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
                    if (party.inventory.filter(item => item.item.getIsUsable()).length === 0) {
                        console.log(clc.red("Your inventory is empty!"));
                        await waitTime(2)
                        break;
                    } else
                        await displayInventory(party)
                    break;
                case "View Equipment":
                    if (party.inventory.filter(item => item.item.getIsEquipable()).length === 0) {
                        console.log(clc.red("You don't have gear to equip !"));
                        await waitTime(2)
                        break;
                    } else
                        await displayEquipmentInventory(party)
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