import clc from "cli-color";
import Party from "../../Party/Party";
import Hero from "../Hero";
import { prompt } from "enquirer";
import askWhichEquipment from "./askWhichEquipment";
import pressContinue from "../../Misc/pressContinue";
import displayPossibleChangeEquipment from "./displayPossibleChangeEquipment";
import EquipementType from "../../Items/Enum/equipementType";
import choiceAccessoryType from "./choiceSubAccessory";

function displayEquipmentOnly(party: Party, hero: Hero) {

    console.log(
        clc.blue("Welcome to the Equipment for ") + clc.green(hero.getName()) + clc.blue("!")
    );

    console.log("\n/----------Equipment----------\\");
    console.log("| Weapon: " + (hero.getWeapon() ? hero.getWeapon()?.getName() : "None"));
    console.log("| Armor: " + (hero.getArmor() ? hero.getArmor()?.getName() : "None"));
    console.log("| Accessories: ");
    hero.getAccessories().forEach((accessory, index) => {
        console.log(`| ${index + 1}: ${accessory ? accessory.getName() : "None"}`);
    });
    console.log("\\----------------------------/");
}

async function displayEquipment(party: Party, hero: Hero) : Promise<void> {
    console.clear();
    displayEquipmentOnly(party, hero);

    let display_menu = true;
    let question = {
        type: "select",
        name: "action",
        message: "What do you want to do?",
        choices: ["Change Equipment", "Back"]
    }

    while (display_menu) {
        try {
            let answer: {action: string} = await prompt(question);
            console.clear();

            switch(answer.action) {
                case "Change Equipment":
                    displayEquipmentOnly(party, hero);
                    let equipment_type = await askWhichEquipment();
                    if (equipment_type === null)
                        display_menu = false;
                    if (equipment_type != EquipementType.ACCESSORY) 
                        await displayPossibleChangeEquipment(equipment_type as EquipementType, party.inventory.equipments, hero);
                    else {
                        let subAccessory = await choiceAccessoryType(hero);
                        console.log(subAccessory);
                        console.log(clc.red("Not implemented yet"));
                    }
                    break;
                case "Back":
                    display_menu = false;
                    break;
                default:
                    console.log(clc.red("Not implemented yet"));
                    break;
            }
        } catch (e: any) {
            clc.red(e.message)
            display_menu = false;
        }
    }
}

export default displayEquipment;
