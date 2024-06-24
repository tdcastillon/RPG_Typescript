import Item from "../../Items/Class/Item";
import itemInventory from "../Interface/itemInventory";

function addItem(inventory: Array<itemInventory>, item: Item, quantity: number = 1) {
    let itemIndex = inventory.findIndex((itemInventory) => itemInventory.item.getName() === item.getName());
    if (itemIndex !== -1) {
        inventory[itemIndex].quantity += quantity;
    } else {
        inventory.push({ item, quantity: quantity });
    }
}

export default addItem