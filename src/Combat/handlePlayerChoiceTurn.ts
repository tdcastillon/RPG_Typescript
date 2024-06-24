import Hero from "../Hero/Hero";
import itemInventory from "../Inventory/Interface/itemInventory";
import getUsableItems from "./getUsableItems";

/**
 * Handle the player choice based on the hero's job
 * @param hero - the hero that is currently playing
 * @param inventory - the inventory of the hero
 * @returns an array of strings containing the available choices
*/

function handlePlayerChoice(hero: Hero, inventory: Array<itemInventory>) : string[] {
    let choices: string[] = ['Attack']

    if (hero._job.getSkillAvailable().length > 0) 
        choices.push('Skill')

    if (getUsableItems(hero, inventory).length > 0)
        choices.push('Use Item')

    choices.push('Run')

    return choices
}

export default handlePlayerChoice