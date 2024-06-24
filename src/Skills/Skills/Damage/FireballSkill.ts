import ManaSkills from "../../Class/ManaSkills";
import skillTarget from "../../Enum/SkillTarget.enum";
import skillType from "../../Enum/SkillType.enum";
import GameEntity from "../../../Game/GameEntity";
import clc from "cli-color";
import waitTime from "../../../Misc/waitTime";

/**
 *  Class for the Fireball skill
 * @class Fireball
 * @extends ManaSkills
*/
class Fireball extends ManaSkills {

    /**
     * Constructor for the Fireball skill
    */
    constructor() {
        super("Fireball", skillTarget.SINGLE_ENEMY, skillType.OFFENSIVE, 5)
        this.setDescription("Casts a fireball at the enemy.")
    }

    /**
     *  Function to use the skill
     * @param {GameEntity} user - the user of the skill
     * @param {GameEntity} target - the target of the skill
     * @returns {Promise<void>} - a promise
    */
    public async useSkill(user: GameEntity, target: GameEntity): Promise<void> {
        const damage = user.getStats().getProperty("MAT") - target.getStats().getProperty("MDF");
        const high = 1.2 * damage;
        const low = 0.7 * damage;
        const final_damage = Math.floor(Math.random() * (high - low) + low);
        let target_stats = target.getStats()
        target_stats.setProperty("HP", (target_stats.getProperty("HP") - final_damage))
        console.log(user.getName() + " cast a " + clc.yellow("Fireball") + " at " + target.getName() + " and dealt " + (final_damage > 0 ? (final_damage + " damage.")  :  "no damage."));
        await waitTime(2)
        if (target_stats.getProperty("HP") <= 0) console.log(target.getName() + " dies from the attack")
        await super.useSkill(user, target)
    }
}

export default Fireball