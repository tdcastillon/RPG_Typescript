import Item from "../../Items/Class/Item";
import itemInventory from "../Interface/itemInventory";

function addItem(inventory: Array<itemInventory>, item: Item) {
    let itemIndex = inventory.findIndex((itemInventory) => itemInventory.item.getName() === item.getName());
    if (itemIndex !== -1) {
        inventory[itemIndex].quantity++;
    } else {
        inventory.push({ item, quantity: 1 });
    }
}

export default addItem