// Purpose: Contains the Attack skill.

// classes
import ManaSkills from "../../Class/ManaSkills";
import GameEntity from "../../../Game/GameEntity";

// enums
import skillType from "../../Enum/SkillType.enum";
import skillTarget from "../../Enum/SkillTarget.enum";
import pressContinue from "../../../Misc/pressContinue";

class Attack extends ManaSkills {
    constructor() {
        super("Attack", skillTarget.SINGLE_ENEMY, skillType.OFFENSIVE, 0);
    }

    public async useSkill(user: GameEntity, target: GameEntity) : Promise<void> {
        const damage = user.getStats().getProperty("ATK") - target.getStats().getProperty("DEF");
        const variance = Math.random() * 0.4 + 0.8;
        const final_damage = Math.floor(damage * variance);
        target.getStats().setProperty("HP", target.getStats().getProperty("HP") - final_damage);
        console.log(user.getName() + " attacked " + target.getName() + " and dealt " + (final_damage > 0 ? (final_damage + " damage.")  :  "no damage."));
        await super.useSkill(user, target);
    }
}

export default Attack;