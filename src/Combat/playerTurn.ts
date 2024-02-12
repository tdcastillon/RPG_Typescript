import clc from "cli-color";
import Enemy from "../Enemy/Class/Enemy";
import Party from "../Party/Party";

import {prompt} from "enquirer";
import Hero from "../Hero/Hero";
import selectHeroParty from "../Party/selectHeroParty";
import Attack from "../Skills/Skills/Damage/Attack.Skill";
import selectSkill from "../Job/Functions/selectSkill";

import SkillRequire from "../Interfaces/skillRequire";
import ManaSkills from "../Skills/Class/ManaSkills";

import skillUse from "../Skills/Functions/skillUse";

async function playerTurn(position: number, party: Party, enemyParty: Array<Enemy>): Promise<boolean> {

  console.clear()

  let hero: Hero = selectHeroParty(party, position) as Hero

  console.log(`It's ` + clc.green(hero.getName()) + `'s turn`)

  let turn = true

  let questions = {
    type: 'select',
    name: 'action',
    message: `It's your turn ! What do you want to do ${hero.getName()} ?`,
    choices: [
      'Attack',
      'Skill',
      'Use Item (not implemented yet)',
      'Run'
    ]
  };

  if (turn) {
    let res: { action: string } = await prompt(questions);
    console.clear()
    switch (res.action) {
      case 'Attack':
        let attack = new Attack()
        await skillUse(attack, hero, enemyParty)
        return false;
      case 'Skill':
        let skill: SkillRequire | null = await selectSkill(hero)
        if (skill) {
          if (skill.skill instanceof ManaSkills) {
            let manaSkill = skill.skill as ManaSkills
            if (manaSkill.getManaCost() > hero.getStats().getProperty("MP")) {
              console.log(clc.red('You don\'t have enough mana to use this skill'))
              break;
            }
          }
          await skillUse(skill.skill, hero, enemyParty)
        } else {
            console.log(clc.red('There is no skill available'))
        }
        break;
      case 'Run':
        console.log('You ran away')
        return true;
      default:
        console.log(clc.red('Invalid action - Not implemented yet'))
        return true;
    }
  }

  return false;
}

export default playerTurn;