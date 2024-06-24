import clc from "cli-color";
import Party from "../../Party/Party";
import sortPagesInventory from "./sortPagesInvenory";
import { prompt } from "enquirer";
import getChoices from "./getChoices";
import pageInventory from "../Interface/pageInventory";
import waitTime from "../../Misc/waitTime";
import findItem from "./findItem";
import displayItem from "./displayItem";

/**
 * function to create the prompt choices for the user in the "View Inventory" functionality
 * 
 * @param {number} actual_page - inventory page of the user
 * @param {pageInventory[]} inventoryByPages - all inventory sorted by pages
 * @param {number} page_min - first page of the inventory
 * @param {number} page_max - last page of the inventory
 * @returns 
 */

function createDisplayInventoryChoices(actual_page: number, inventoryByPages: pageInventory[], page_max: number, page_min: number = 0) {
    let choices: string[] = getChoices(actual_page, inventoryByPages)
    if (actual_page !== page_min)
        choices.push('Previous page')
    if (actual_page !== page_max)
        choices.push('Next page')
    choices.push('Exit Inventory')
    return choices
}

/**
 * function to display the inventory of the player
 * 
 * @param {Party} party - the party of the player
 */

async function displayInventory(party: Party) {
    console.clear();

    console.log(clc.blue('Inventory'));

    let inventoryByPages = sortPagesInventory(party.inventory)

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