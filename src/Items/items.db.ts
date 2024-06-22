/**
 * database for the items
*/

import ItemDB from "./Interface/ItemDB";
import Potion from "./Items/Potion";

const item_db : Array<ItemDB> = [
    {
        name: "Potion",
        item: new Potion()
    }
]

module.exports = item_db