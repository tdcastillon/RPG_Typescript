import itemInventory from "../Interface/itemInventory";

/**
 * function to remove an item from the inventory
 * 
 * @param {Array<itemInventory>} inventory - inventory of the user
 * @param {string} item_name - name of the item to remove
 * @param {number} quantity - quantity of the item to remove - default 1
 */
function removeItem(inventory: Array<itemInventory>, item_name: string, quantity: number = 1) {
    let itemIndex = inventory.findIndex((itemInventory) => itemInventory.item.getName() === item_name);
    if (itemIndex !== -1) {
        inventory[itemIndex].quantity -= quantity;
        if (inventory[itemIndex].quantity <= 0) {
            inventory.splice(itemIndex, 1);
        }
    }
}

export default removeItem