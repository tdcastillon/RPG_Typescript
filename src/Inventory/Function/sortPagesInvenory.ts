import itemInventory from "../Interface/itemInventory";
import pageInventory from "../Interface/pageInventory";

/**
 * Sort the inventory in pages of 4 items
 * @param inventory - inventory of the player
 * @returns inventory for a better display in the View Inventory functionality
 */

function sortPagesInventory(inventory: Array<itemInventory>) : Array<pageInventory> {
    let pages: Array<pageInventory> = []

    let page_count = inventory.length % 4
    page_count = (page_count === 0) ? inventory.length / 4 : Math.floor(inventory.length / 4) + 1

    inventory.sort((a, b) => {
        if (a.item.getName() < b.item.getName()) {
            return -1
        }
        if (a.item.getName() > b.item.getName()) {
            return 1
        }
        return 0
    })

    for (let i = 0; i < page_count; i++) {
        let items: Array<itemInventory> = []
        for (let j = 0; j < 4; j++) {
            if (inventory[i * 4 + j] !== undefined) {
                items.push(inventory[i * 4 + j])
            }
        }
        pages.push({ page: i, items: items })
    }

    return pages
}

export default sortPagesInventory