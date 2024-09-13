import clc from "cli-color";
import EquipableItem from "../../Items/Class/EquipableItem";
import EquipementType from "../../Items/Enum/equipementType";
import Hero from "../Hero";
import { prompt } from "enquirer";
import pressContinue from "../../Misc/pressContinue";

async function displayPossibleChangeEquipment(equipment_type: EquipementType, equipableItems: EquipableItem[], hero: Hero) : Promise<void> {
    // Get all the items that are equipable and not equipped
    let _possibleItems = equipableItems.filter((item: EquipableItem) => item.getEquipmentType() === equipment_type && item.getOwner() === "");
    
    interface itemDisplay {
        name: string,
        index: number, 
        quantity: number
    }

    // Get the possible items and their quantity
    let possibleItems : itemDisplay[] = []

    _possibleItems.forEach((item: EquipableItem, index: number) => {
        for (let i = 0; i < possibleItems.length; i++) {
            if (possibleItems[i].name === item.getName()) {
                possibleItems[i].quantity += 1
                return
            }
        }
        possibleItems.push({name: item.getName(), index: index, quantity: 1})
    })

    // Display the possible items
    let itemsChoices : string[] = []
    possibleItems.forEach((item: itemDisplay) => {
        itemsChoices.push(`${item.name}*(${item.quantity})`)
    })

    // Add the cancel option
    itemsChoices.push("Cancel")

    console.log("Choose an item to equip: ")
    
    let display_menu = true;
    // prepare the question to ask to the user
    let question = {
        type: "select",
        name: "action",
        message: "What do you want to do?",
        choices: itemsChoices
    }

    while (display_menu) {
        try {
            let answer: {action: string} = await prompt(question);

            switch(answer.action) {
                case "Cancel":
                    display_menu = false;
                    break;
                default:
                    let itemChoice = answer.action.split("*")[0]
                    let itemIndex = possibleItems.find((item: itemDisplay) => item.name === itemChoice)?.index
                    if (itemIndex === undefined) {
                        console.log(clc.red("An error occured while getting the item index"))
                        display_menu = false;
                        break;
                    }
                    let is_equipped = hero.equipItem(_possibleItems[itemIndex])
                    if (!is_equipped)
                        console.log(clc.red("An error occured while equipping the item"))
                    else
                        console.log((clc.yellow(itemChoice) + clc.green(" has been equipped!")))
                    await pressContinue();
                    display_menu = false;
                    break;
            }
        } catch (e: any) {
            clc.red(e.message)
            display_menu = false;
        }
    }

}

export default displayPossibleChangeEquipment