import Skill from "../Class/Skill";
import Hero from "../../Hero/Hero";
import Enemy from "../../Enemy/Class/Enemy";
import waitTime from "../../Misc/waitTime";
import enemyTarget from "./enemyTarget";

/**
 *  Function to use a skill
 * @param {Skill} skill - the skill to use
 * @param {Hero} hero - the hero using the skill
 * @param {Array<Enemy>} enemyParty - the enemy party
 * @returns {Promise<void>} - a promise
*/
async function skillUse(skill: Skill, hero: Hero, enemyParty: Array<Enemy>): Promise<void> {
  if (enemyParty.length > 1) {
    let target: Enemy = await enemyTarget(skill.getSkillTarget(), enemyParty) as Enemy
    await skill.useSkill(hero, target)
  } else {
    await skill.useSkill(hero, enemyParty[0])
  }
  await waitTime(2)
}

export default skillUse;