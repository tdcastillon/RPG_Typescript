import clc from "cli-color";
import EquipableItem from "../../Items/Class/EquipableItem";
import EquipementType from "../../Items/Enum/equipementType";
import Hero from "../Hero";

function equipHero(hero: Hero, item: EquipableItem) : boolean {
    let is_equipped = false;
    switch (item.getEquipmentType()) {
        case EquipementType.WEAPON:
            is_equipped = hero.setWeapon(item)
            break;
        case EquipementType.ARMOR:
            is_equipped = hero.setArmor(item)
            break;
        case EquipementType.ACCESSORY:
            is_equipped = hero.setAccessory(item)
            break;
        default:
            clc.red("This item is not equipable")
    }
    return is_equipped
}

export default equipHero;