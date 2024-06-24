import { prompt } from "enquirer";
import sortPagesInventory from "../Inventory/Function/sortPagesInvenory";
import getUsableItems from "./getUsableItems";

import itemInventory from "../Inventory/Interface/itemInventory";
import pageInventory from "../Inventory/Interface/pageInventory";
import Party from "../Party/Party";
import Enemy from "../Enemy/Class/Enemy";
import Hero from "../Hero/Hero";
import findItem from "../Inventory/Function/findItem";
import useItem from "../Inventory/Function/useItem";
import selectTargetItem from "../Items/Function/selectItemTarget";
import GameEntity from "../Game/GameEntity";
import selectHeroParty from "../Party/selectHeroParty";

function getOptions(actual_page: number, max_page: number, items: pageInventory[]) : string[] {
    let choices : string[] = []
    items[actual_page].items.forEach((inventoryItem: itemInventory) => {
        choices.push(inventoryItem.item.getName() + ' x' + inventoryItem.quantity.toString())
    })
    switch (actual_page) {
        case 0:
            choices.push('Next')
            break
        case max_page:
            choices.push('Previous')
            break
        default:
            choices.push('Next')
            choices.push('Previous')
            break
    }
    choices.push('Back')
    return choices
} 

async function useItemBattle(hero: Hero,party: Party, enemies: Array<Enemy>) : Promise<boolean> {
    let usableItems = getUsableItems(hero, party.inventory)
    let items : pageInventory[] = sortPagesInventory(usableItems)

    let max_page = items[items.length - 1].page
    let actual_page = 0

    let question = {
        type: 'select',
        name: 'choice',
        message: 'Choose an item to use',
        choices: getOptions(actual_page, max_page, items)
    }

    let res : {choice: string} = await prompt(question)
    switch (res.choice) {
        case 'Next':
            actual_page += 1
            break
        case 'Previous':
            actual_page -= 1
            break
        case 'Back':
            return false
        default:
            let selected_item = res.choice.split(' x')[0]
            let inventoryItem: itemInventory | undefined = findItem(selected_item, items[actual_page].items)
            if (inventoryItem == undefined)
                return false
            let targets: GameEntity[] = []
            for (let i = 0; i < party.length; i++) {
                if (selectHeroParty(party, i))
                    targets.push(selectHeroParty(party, i) as GameEntity)
            }
            enemies.forEach((enemy: Enemy) => {
                targets.push(enemy)
            })
            let target: GameEntity | undefined = await selectTargetItem(hero, targets, inventoryItem.item)
            if (target == undefined)
                return false
            await useItem(party.inventory, inventoryItem.item, target)
            return true
    }
    return false;
}

export default useItemBattle;