import ManaSkills from "../../Class/ManaSkills";
import skillTarget from "../../Enum/SkillTarget.enum";
import skillType from "../../Enum/SkillType.enum";
import GameEntity from "../../../Game/GameEntity";
import clc from "cli-color";
import waitTime from "../../../Misc/waitTime";

class Fireball extends ManaSkills {
    constructor() {
        super("Fireball", skillTarget.SINGLE_ENEMY, skillType.OFFENSIVE, 5)
    }

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