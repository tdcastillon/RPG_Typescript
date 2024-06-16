// Purpose: Contains the Attack skill.

// classes
import ManaSkills from "../../Class/ManaSkills";
import GameEntity from "../../../Game/GameEntity";

// enums
import skillType from "../../Enum/SkillType.enum";
import skillTarget from "../../Enum/SkillTarget.enum";
import waitTime from "../../../Misc/waitTime";

/**
 *  Class for the Attack skill
 * @class Attack
 * @extends ManaSkills
*/
class Attack extends ManaSkills {
    constructor() {
        super("Attack", skillTarget.SINGLE_ENEMY, skillType.OFFENSIVE, 0);
    }

    /**
     *  Function to use the skill
     * @param {GameEntity} user - the user of the skill
     * @param {GameEntity} target - the target of the skill
     * @returns {Promise<void>} - a promise
    */
    public async useSkill(user: GameEntity, target: GameEntity) : Promise<void> {
        const damage = user.getStats().getProperty("ATK") - target.getStats().getProperty("DEF");
        const high = 1.1 * damage;
        const low = 0.9 * damage;
        const final_damage = Math.floor(Math.random() * (high - low) + low);
        target.getStats().setProperty("HP", target.getStats().getProperty("HP") - final_damage);
        console.log(user.getName() + " attacked " + target.getName() + " and dealt " + (final_damage > 0 ? (final_damage + " damage.")  :  "no damage."));
        await waitTime(0.5)
        if (target.getStats().getProperty("HP") <= 0)
            console.log(target.getName() + " dies from the attack")
        await super.useSkill(user, target);
    }
}

export default Attack;