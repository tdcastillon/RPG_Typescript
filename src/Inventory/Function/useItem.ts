import clc from "cli-color";
import GameEntity from "../../Game/GameEntity";
import Item from "../../Items/Class/Item";
import itemInventory from "../Interface/itemInventory";
import removeItem from "./removeItem";
import ConsumableItem from "../../Items/Class/ConsumableItem";

async function useItem(inventory: Array<itemInventory>, item: Item, target: GameEntity | null) {
    let itemIndex = inventory.findIndex((itemInventory) => itemInventory.item.getName() === item.getName());
    if (itemIndex !== -1) {
        if (item instanceof ConsumableItem) {
            await item.use(target as GameEntity)
            removeItem(inventory, item.getName())
        } else 
            console.log(clc.red('This item is not usable'))
    }
}

export default useItem