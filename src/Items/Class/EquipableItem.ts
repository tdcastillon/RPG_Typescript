import InitStats from "../../Stats/InitStats";
import Stats from "../../Stats/Stats";
import WeaponType from "../Enum/weaponType"
import accessoryType from "../Enum/accessoryType";
import armorType from "../Enum/armorType";
import EquipementType from "../Enum/equipementType";
import Item from "./Item";

/**
 * Class that represents an equipable item in the game
 * 
 * @class EquipableItem
 * @extends Item
*/

class EquipableItem extends Item {

    private equipment_type: EquipementType = EquipementType.WEAPON;
    private equipment_subtype: armorType | WeaponType | accessoryType = WeaponType.SWORD;

    private readonly equiment_stats: Stats = new Stats({
        HP: 0,
        MAX_HP: 0,
        MP: 0,
        MAX_MP: 0,
        ATK: 0,
        DEF: 0,
        MAT: 0,
        MDF: 0,
        EXP: 0,
        FULL_EXP: 0,
        LVL: 0,
    } as InitStats);

    constructor(name: string, description: string, is_usable: boolean, value: number, equipment_type: EquipementType, equipment_subtype: armorType | WeaponType | accessoryType, stats: Stats) {
        super(name, description, value, is_usable, true);
        this.equipment_type = equipment_type;
        this.equipment_subtype = equipment_subtype;
        this.equiment_stats = stats;
    }

    public getEquipmentType(): EquipementType {
        return this.equipment_type;
    }

    public getEquipmentSubtype(): armorType | WeaponType | accessoryType {
        return this.equipment_subtype;
    }

    public getEquipmentStats(): Stats {
        return this.equiment_stats;
    }
}

export default EquipableItem;