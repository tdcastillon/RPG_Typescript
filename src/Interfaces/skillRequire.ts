import Skill from "../Skills/Class/Skill";

/**
 *  Interface for a skill requirement
 * @property {Skill} skill - the skill required
 * @property {number} level - the level required
 */
interface SkillRequire {
    skill: Skill,
    level: number
}

export default SkillRequire