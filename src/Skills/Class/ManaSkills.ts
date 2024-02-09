import Skill from './Skill';

import skillTarget from '../Enum/SkillTarget.enum';
import skillType from '../Enum/SkillType.enum';

class ManaSkills extends Skill {
    constructor(name: string, skillTarget: skillTarget, skillType: skillType, public manaCost: number) {
        super(name, skillTarget, skillType);
    }

    public getManaCost() : number {
        return this.manaCost;
    }
}

export default ManaSkills;