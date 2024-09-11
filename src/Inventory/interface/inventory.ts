import EquipableItem from "../../Items/Class/EquipableItem";
import itemInventory from "./itemInventory";

/**
 * Interface for the Inventory
 * @property {Array<EquipableItem>} equipments - The equipments in the inventory
 * @property {Array<itemInventory>} items - The items in the inventory
*/

interface Inventory {
    equipments: Array<EquipableItem>,
    items: Array<itemInventory>
}

export default Inventory