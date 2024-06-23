import Item from "../../Items/Class/Item";
import ItemInventory from "../Interface/ItemInventory";

function addItem(inventory: Array<ItemInventory>, item: Item) {
    let itemIndex = inventory.findIndex((itemInventory) => itemInventory.item.getName() === item.getName());
    if (itemIndex !== -1) {
        inventory[itemIndex].quantity++;
    } else {
        inventory.push({ item, quantity: 1 });
    }
}

export default addItem