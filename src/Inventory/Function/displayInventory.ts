import clc from "cli-color";
import Party from "../../Party/Party";
import sortPagesInventory from "./sortPagesInvenory";
import { prompt } from "enquirer";
import waitTime from "../../Misc/waitTime";
import findItem from "./findItem";
import displayItem from "./displayItem";
import createDisplayInventoryChoices from "./createDisplayInventoryChoices";


/**
 * function to display the inventory of the player
 * 
 * @param {Party} party - the party of the player
 */

async function displayInventory(party: Party) {
    console.clear();

    console.log(clc.blue('Inventory'));

    let inventoryByPages = sortPagesInventory(party.inventory.filter(item => item.item.getIsUsable()))

    let actual_page = 0;
    let page_max = inventoryByPages[inventoryByPages.length - 1].page
    let in_inventory = true;

    let choices = createDisplayInventoryChoices(actual_page, inventoryByPages, page_max)

    let question = {
        type: 'select',
        name: 'choice',
        message: `Select an item to use`,
        choices: choices
    }

    while (in_inventory) {
        console.clear()
        let res: { choice: string } = await prompt(question);
        switch (res.choice) {
            case 'Previous page':
                actual_page -= 1;
                break;
            case 'Next page':
                actual_page += 1;
                break;
            case 'Exit Inventory':
                in_inventory = false;
                break;
            default:
                let item_name = res.choice.split(' *')[0]
                let item = findItem(item_name, party.inventory)
                if (item)
                    await displayItem(item.item, item.quantity, party)
                await waitTime(2)
                break;
        }

        if (party.inventory.length === 0)
            in_inventory = false;

        if (actual_page < 0)
            actual_page = 0;
        if (actual_page > page_max)
            actual_page = page_max;

        question.choices = createDisplayInventoryChoices(actual_page, inventoryByPages, page_max)
    }
}

export default displayInventory;