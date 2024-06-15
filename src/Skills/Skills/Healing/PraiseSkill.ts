import ManaSkills from "../../Class/ManaSkills";
import skillTarget from "../../Enum/SkillTarget.enum";
import skillType from "../../Enum/SkillType.enum";
import GameEntity from "../../../Game/GameEntity";
import clc from "cli-color";
import waitTime from "../../../Misc/waitTime";

/**
 *  Class for the Praise skill
 * @class Praise
 * @extends ManaSkills
*/

class Praise extends ManaSkills {

    constructor() {
        super("Praise", skillTarget.SELF, skillType.HEALING, 5)
    }

    /**
     *  Function to use the skill
     * @param {GameEntity} user - the user of the skill
     * @param {GameEntity} target - the target of the skill - UNUSED HERE
     * @returns {Promise<void>} - a promise
    */
    public async useSkill(user: GameEntity, target: GameEntity): Promise<void> {
        user.getStats().setProperty("MP", user.getStats().getProperty("MP") - this.getManaCost())
        const high = 1.2 * user.getStats().getProperty("MAT")
        const low = 0.8 * user.getStats().getProperty("MAT")
        const final_heal = Math.floor(Math.random() * (high - low) + low);
        let max_hp =target.getStats().getProperty("MAX_HP")
        let current_health = target.getStats().getHP()
        
        let real_heal = (current_health + final_heal > max_hp) ? max_hp - current_health : final_heal;
        console.log(user.getName() + " " + clc.yellow("praises") + " and heals himself of a total amount of " + final_heal.toString() + " HP !")
        await waitTime(0.5)
        target.getStats().setProperty("HP", current_health + real_heal)
        await super.useSkill(user, target)  
    }
}

export default Praise