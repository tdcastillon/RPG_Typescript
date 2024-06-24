import { prompt } from "enquirer";

import GameEntity from "../../Game/GameEntity";
import ConsumableItem from "../Class/ConsumableItem";
import Item from "../Class/Item";
import itemRange from "../Enum/itemRange";
import pressContinue from "../../Misc/pressContinue";

async function selectTargetItem(user: GameEntity, targets: Array<GameEntity>, item: Item) : Promise<GameEntity | undefined> {

    if (!item.getIsUsable())
        return undefined

    if (item instanceof ConsumableItem){
        switch (item.getItemRange()) {
            case itemRange.SELF:
                return user
                break;
            case itemRange.SINGLE:
                let name_list: string[] = targets.map((target) => target.getName())
                name_list.push('Exit')
                let question = {
                    type: 'select',
                    name: 'choice',
                    message: 'Choose a target',
                    choices: name_list
                }
                let res : {choice: string} = await prompt(question)
                if (res.choice === 'Exit')
                    return undefined
                else
                    return targets.find((target) => target.getName() === res.choice)
                break;
        }
    } else 
        return undefined
}

export default selectTargetItem;