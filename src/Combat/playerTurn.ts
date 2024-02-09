import clc from "cli-color";
import Enemy from "../Enemy/Class/Enemy";
import Party from "../Party/Party";

import { prompt } from "enquirer";
import Hero from "../Hero/Hero";
import selectHeroParty from "../Party/selectHeroParty";
import pressContinue from "../Misc/pressContinue";
import Attack from "../Skills/Skills/Damage/Attack.Skill";
import enemyTarget from "../Skills/enemyTarget";

async function playerTurn(position: number, party: Party, enemyParty: Array<Enemy>) : Promise<boolean> {
    
    console.clear()

    let hero: Hero = selectHeroParty(party, position) as Hero

    console.log(`It's ` + clc.green(hero.getName()) + `'s turn`)

    let turn = true
    
    let questions = {
        type: 'select',
        name: 'action',
        message: `It's your turn ! What do you want to do ${hero.getName()} ?`,
        choices: [
            'Attack',
            'Skill (not implemented yet)',
            'Use Item (not implemented yet)',
            'Run'
        ]
    };

    if (turn) {
        let res : {action: string} = await prompt(questions);
        console.clear()
        switch (res.action) {
            case 'Attack':
                let attack = new Attack()
                if (enemyParty.length > 1) {
                    let target: Enemy = await enemyTarget(attack.getSkillTarget(), enemyParty) as Enemy
                    await attack.useSkill(hero, target)
                } else {
                    await attack.useSkill(hero, enemyParty[0])
                }
                return false;
            case 'Run':
                console.log('You ran away')
                break;
            default:
                console.log(clc.red('Invalid action - Not implemented yet'))
                break;
        }
        return true;
    }

    return false;
}

export default playerTurn;