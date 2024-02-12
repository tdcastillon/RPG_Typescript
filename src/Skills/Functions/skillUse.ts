import Skill from "../Class/Skill";
import Hero from "../../Hero/Hero";
import Enemy from "../../Enemy/Class/Enemy";
import waitTime from "../../Misc/waitTime";
import enemyTarget from "./enemyTarget";

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