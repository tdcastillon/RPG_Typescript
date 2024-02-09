import Enemy from "../Enemy/Class/Enemy";
import pressContinue from "../Misc/pressContinue";
import waitTime from "../Misc/waitTime";
import Party from "../Party/Party";
import Attack from "../Skills/Skills/Damage/Attack.Skill";

async function enemyTurn(position: number, party: Array<Enemy>, user: Party) : Promise<boolean> {
    console.clear()

    let target = Math.floor(Math.random() * user.length)

    let attack = new Attack()
    await attack.useSkill(party[position], user[target].hero)

    return true;
} 

export default enemyTurn;