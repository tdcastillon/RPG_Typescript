import clc from "cli-color";
import { prompt } from "enquirer";
import Item from "../../Items/Class/Item";
import waitTime from "../../Misc/waitTime";
import Party from "../../Party/Party";
import selectTargetItem from "../../Items/Function/selectItemTarget";
import GameEntity from "../../Game/GameEntity";
import useItem from "./useItem";

function displayChoiceItem(item: Item) : string[] {
    let choices: string[] = []

    if (item.getIsUsable())
        choices.push('Use')

    choices.push('Exit')

    return choices
}

async function getAllHeroes(party: Party) : Promise<GameEntity[]> {
    let heroes : Array<GameEntity> = []
    for (let i = 0; i < party.length; i++) {
        if (party[i].hero)
            heroes.push(party[i].hero)
    }
    return heroes
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
                if (item.getIsEquipable()) {
                    clc.red("This item cannot be used in this menu")
                    break;
                }
                let heroes = await getAllHeroes(party)
                let target_use = await selectTargetItem(party[0].hero, heroes, item)
                if (target_use === undefined)
                    break;
                useItem(party.inventory.items, item, target_use)
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