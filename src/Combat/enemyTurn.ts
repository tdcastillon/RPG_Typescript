import Enemy from "../Enemy/Class/Enemy";
import pressContinue from "../Misc/pressContinue";
import waitTime from "../Misc/waitTime";
import Party from "../Party/Party";
import Attack from "../Skills/Skills/Damage/Attack.Skill";

/**
 * @param {number} position - position of the enemy in the party 
 * @param {Array<Enemy} party  - array that corresponds to the enemyParty
 * @param {Party} user - corresponds to the user party 
 * @returns {boolean} - to ensure the turn was done
 */

async function enemyTurn(position: number, party: Array<Enemy>, user: Party) : Promise<boolean> {
    console.clear()

    let target = Math.floor(Math.random() * user.length)

    let attack = new Attack()
    await attack.useSkill(party[position], user[target].hero)

    return true;
} 

export default enemyTurn;