import clc from "cli-color";
import { prompt } from "enquirer";
import Item from "../../Items/Class/Item";
import waitTime from "../../Misc/waitTime";
import Party from "../../Party/Party";
import selectTargetItem from "../../Items/Function/selectItemTarget";
import GameEntity from "../../Game/GameEntity";
import useItem from "./useItem";
import pressContinue from "../../Misc/pressContinue";

function displayChoiceItem(item: Item) : string[] {
    let choices: string[] = []

    if (item.getIsUsable())
        choices.push('Use')

    if (item.getIsEquipable())
        choices.push('Equip' + clc.red(' (Not implemented yet)'))

    choices.push('Exit')

    return choices
}

async function displayItem(item: Item, quantity: number, party: Party) {
    console.clear();

    console.log(clc.blue(item.getName())+"\n");

    console.log(item.getDescription()+"\n");

    console.log("Quantity: "+ quantity.toString()+"\n");

    let in_item_menu = true;

    let question = {
        type: 'select', 
        name: 'choice',
        message: `What do you want to do with ${item.getName()}?`,
        choices: displayChoiceItem(item)
    }

    while (in_item_menu) {
        let res: { choice: string } = await prompt(question);
        switch (res.choice) {
            case 'Use':
                let heroes : Array<GameEntity> = []
                for (let i = 0; i < party.length; i++) {
                    if (party[i].hero)
                        heroes.push(party[i].hero)
                }
                let target = await selectTargetItem(party[0].hero, heroes, item)
                if (target === undefined)
                    break;
                useItem(party.inventory, item, target)
                in_item_menu = false;
                break;
            case 'Equip':
                console.log(`You equipped ${item.getName()}`)
                await waitTime(2)
                in_item_menu = false;
                break;
            case 'Exit':
                in_item_menu = false;
                break;
            default:
                clc.red("Invalid choice")
                break;
        }
    }
}

export default displayItem;