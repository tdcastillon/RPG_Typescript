import ItemInventory from "../Interface/ItemInventory";

function removeItem(inventory: Array<ItemInventory>, item_name: string) {
    let itemIndex = inventory.findIndex((itemInventory) => itemInventory.item.getName() === item_name);
    if (itemIndex !== -1) {
        inventory[itemIndex].quantity--;
        if (inventory[itemIndex].quantity === 0) {
            inventory.splice(itemIndex, 1);
        }
    }
}

export default removeItem