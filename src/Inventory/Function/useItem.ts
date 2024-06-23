import clc from "cli-color";
import GameEntity from "../../Game/GameEntity";
import Item from "../../Items/Class/Item";
import itemInventory from "../Interface/itemInventory";

function useItem(inventory: Array<itemInventory>, item: Item, target: GameEntity | null) {
    let itemIndex = inventory.findIndex((itemInventory) => itemInventory.item.getName() === item.getName());
    if (itemIndex !== -1) {
        if (item.getIsUsable()) {
            item.use(target as GameEntity)
            inventory[itemIndex].quantity--;
            if (inventory[itemIndex].quantity === 0)
                inventory.splice(itemIndex, 1);
        } else {
            clc.red(item.getName() + " is not usable")
        }
    }
}

export default useItem