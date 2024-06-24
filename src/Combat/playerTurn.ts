import clc from "cli-color";
import {prompt} from "enquirer";

import Enemy from "../Enemy/Class/Enemy";
import Party from "../Party/Party";
import Hero from "../Hero/Hero";
import selectHeroParty from "../Party/selectHeroParty";

import selectSkill from "../Job/Functions/selectSkill";
import SkillRequire from "../Interfaces/skillRequire";
import Attack from "../Skills/Skills/Damage/Attack.Skill";
import ManaSkills from "../Skills/Class/ManaSkills";
import skillUse from "../Skills/Functions/skillUse";

import waitTime from "../Misc/waitTime";
import handlePlayerChoice from "./handlePlayerChoiceTurn";

/**
   Function to handle the player's turn during a fight
  @param {number} position - The position of the hero in the party
  @param {Party} party - The user's party object
  @param {Array<Enemy>} enemyParty - An array of Enemy objects that corresponds to the enemy's party
  @returns {[boolean, boolean]} - A tuple containing two booleans. The first boolean indicates whether the fight has finished, and the second boolean indicates whether the user made a mistake during their turn.
*/

async function playerTurn(position: number, party: Party, enemyParty: Array<Enemy>): Promise<[boolean, boolean]> {

  console.clear()

  let hero: Hero = selectHeroParty(party, position) as Hero

  console.log(`It's ` + clc.green(hero.getName()) + `'s turn`)
  console.log(`HP : ${hero.getStats().getProperty("HP")}\nMP : ${hero.getStats().getProperty("MP")}\n`)

  let turn = true

  let questions = {
    type: 'select',
    name: 'action',
    message: `It's your turn ! What do you want to do ${hero.getName()} ?`,
    choices: handlePlayerChoice(hero, party.inventory)
  };

  if (turn) {
    let res: { action: string } = await prompt(questions);
    console.clear()
    switch (res.action) {
      case 'Attack':
        console.clear()
        let attack = new Attack()
        await skillUse(attack, hero, enemyParty)
        return [false, true];
      case 'Skill':
        console.clear()
        let skill: SkillRequire | null = await selectSkill(hero)
        if (skill !== null) {
          if (skill.skill instanceof ManaSkills) {
            let manaSkill = skill.skill as ManaSkills
            if (manaSkill.getManaCost() > hero.getStats().getProperty("MP")) {
              console.log(clc.red('You don\'t have enough mana to use this skill'))
              await waitTime(2)
              return [false, false]
            }
          }
          await skillUse(skill.skill, hero, enemyParty)
        } else {
          return [false, false]
        }
        return [false, true]
      case 'Run':
        console.log('You ran away')
        return [true, true]
      default:
        console.log(clc.red('Invalid action - Not implemented yet'))
        return [false, false]
    }
  }

  return [false, false];
}

export default playerTurn;