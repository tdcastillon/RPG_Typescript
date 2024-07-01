import clc from "cli-color";
import EquipementType from "../../Items/Enum/equipementType";
import { prompt } from "enquirer";

async function askWhichEquipment() : Promise<EquipementType | null > {
    let equipment_type: EquipementType = EquipementType.WEAPON

    let question = {
        type: "select",
        name: "equipment",
        message: "Which equipment do you want to change?",
        choices: [
            "Weapon",
            "Armor",
            "Accessories",
            "Back"
        ]
    }

    let display_menu = true;
    while (display_menu) {
        try {
            let answer: {equipment: string} = await prompt(question);

            switch(answer.equipment) {
                case "Weapon":
                    return EquipementType.WEAPON;
                case "Armor":
                    return EquipementType.ARMOR;
                case "Accessories":
                    return EquipementType.ACCESSORY;
                case "Back":
                    return null;
                default:
                    console.log(clc.red("Not implemented yet"));
            }
        } catch (e: any) {
            console.log(clc.red(e.message))
            break;
        }
    }
    return null;
}

export default askWhichEquipment