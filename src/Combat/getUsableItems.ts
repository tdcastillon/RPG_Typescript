import Hero from "../Hero/Hero"
import itemInventory from "../Inventory/Interface/itemInventory"
import ConsumableItem from "../Items/Class/ConsumableItem"

/**
 * Get the usable items from the hero's inventory
 * @param hero - the hero that is currently playing
 * @param inventory - the inventory of the hero
 * @returns an array of itemInventory containing the usable items
*/

function getUsableItems(hero: Hero, inventory: Array<itemInventory>) : Array<itemInventory> {
    let usableItems : Array<itemInventory> = []

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].item instanceof ConsumableItem)
            usableItems.push(inventory[i])
    }

    return usableItems
}

export default getUsableItems