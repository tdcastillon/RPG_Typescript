import Hero from "../../Hero/Hero";
import Item from "../../Items/Class/Item";
import Party from "../../Party/Party";
import { prompt } from "enquirer";

async function selectTargetEquipment(party: Party, item: Item) : Promise<Hero | undefined> {
    if (!item.getIsEquipable())
        return undefined

    let heroes: Array<Hero> = []
    for (let i = 0; i < party.length; i++) {
        if (party[i].hero)
            heroes.push(party[i].hero)
    }

    let name_list: string[] = heroes.map((hero) => hero.getName())
    name_list.push('Exit')

    let question = {
        type: 'select',
        name: 'choice',
        message: 'Choose a target',
        choices: name_list
    }
    let res:  {choice: string } = await prompt(question)
    switch (res.choice) {
        case 'Exit':
            return undefined
        default:
            return heroes.find((hero) => hero.getName() === res.choice)
    }
}

export default selectTargetEquipment