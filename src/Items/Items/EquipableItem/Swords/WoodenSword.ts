import InitStats from "../../../../Stats/InitStats";
import Stats from "../../../../Stats/Stats";
import EquipableItem from "../../../Class/EquipableItem";
import EquipementType from "../../../Enum/equipementType";
import WeaponType from "../../../Enum/weaponType";

class WoodenSword extends EquipableItem {
    constructor() {
        let stats: Stats = new Stats({
            HP: 0,
            MAX_HP: 0,
            MP: 0,
            MAX_MP: 0,
            ATK: 2,
            DEF: 0,
            MAT: 0,
            MDF: 0,
            EXP: 0,
            FULL_EXP: 0,
            LVL: 0,
        } as InitStats);
        super("Wooden Sword", "A simple wooden sword", false, 2, EquipementType.WEAPON, WeaponType.SWORD, stats);
    }
}

export default WoodenSword;