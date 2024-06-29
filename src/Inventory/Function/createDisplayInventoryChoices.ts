/**
 * function to create the prompt choices for the user in the "View Inventory" functionality
 * 
 * @param {number} actual_page - inventory page of the user
 * @param {pageInventory[]} inventoryByPages - all inventory sorted by pages
 * @param {number} page_min - first page of the inventory
 * @param {number} page_max - last page of the inventory
 * @returns 
 */

import pageInventory from "../Interface/pageInventory"
import getChoices from "./getChoices"

function createDisplayInventoryChoices(actual_page: number, inventoryByPages: pageInventory[], page_max: number, page_min: number = 0) {
    let choices: string[] = getChoices(actual_page, inventoryByPages)
    if (actual_page !== page_min)
        choices.push('Previous page')
    if (actual_page !== page_max)
        choices.push('Next page')
    choices.push('Exit Inventory')
    return choices
}

export default createDisplayInventoryChoices