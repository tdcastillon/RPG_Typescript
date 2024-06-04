import Skill from './Skill';

import skillTarget from '../Enum/SkillTarget.enum';
import skillType from '../Enum/SkillType.enum';

/**
 *  Class for mana skills
 * @class ManaSkills
 * @extends Skill
 * @param {string} name - the name of the skill
 * @param {skillTarget} skillTarget - the target of the skill
 * @param {skillType} skillType - the type of the skill
 * @param {number} manaCost - the cost of the skill
*/
class ManaSkills extends Skill {
    constructor(name: string, skillTarget: skillTarget, skillType: skillType, public manaCost: number) {
        super(name, skillTarget, true, skillType);
    }

    public getManaCost() : number {
        return this.manaCost;
    }
}

export default ManaSkills;