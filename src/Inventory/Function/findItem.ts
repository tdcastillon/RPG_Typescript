import Item from "../../Items/Class/Item";
import itemInventory from "../Interface/itemInventory";

function findItem(item_name: string, inventory: Array<itemInventory>) : itemInventory | undefined {
    let _itemInventory = inventory.find((itemInventory) => itemInventory.item.getName() === item_name);

    if (_itemInventory)
        return _itemInventory
    else
        return undefined
}

export default findItem