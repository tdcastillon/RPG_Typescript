import Enemy from "../../Enemy/Class/Enemy";
import GameEntity from "../../Game/GameEntity";
import pressContinue from "../../Misc/pressContinue";
import skillTarget from "../Enum/SkillTarget.enum";

import { prompt } from "enquirer";

/**
 *  Function to select an enemy target
 * @param {skillTarget} targetNumber - the target number
 * @param {Array<GameEntity>} targetList - the target list
 * @returns {Promise<GameEntity | Array<GameEntity> | null>} - the target
*/

async function enemyTarget(
  targetNumber: skillTarget,
  targetList: Array<GameEntity>
): Promise<GameEntity | Array<GameEntity> | null> {
  let _targetList: string[] = [];
  let i = 0;

  for (let target of targetList) {
    _targetList.push(`${i} - ${target.getName()}`);
    i++;
  }

  switch (targetNumber) {
      case skillTarget.SINGLE_ALLY:
      case skillTarget.SINGLE_ENEMY:
          let question_single = {
              type: 'select',
              name: 'target',
              message: 'Select a target',
              choices: _targetList
          }
          let res : {target: string} = await prompt(question_single)
          return targetList[parseInt(res.target.split(' - ')[0])]
      case skillTarget.MULTI_ALLY:
      case skillTarget.MULTI_ENEMY:
          console.log('Select multiple targets')
          let question_multi = {
              type: 'multiselect',
              name: 'target',
              message: 'Select a target',
              choices: _targetList
          }
          let res_multi : {target: Array<string>} = await prompt(question_multi)
          let targets : Array<GameEntity> = []
          for (let target of res_multi.target) {
              targets.push(targetList[parseInt(target.split(' - ')[0])])
          }
          return targets
      default:
          return null
  }
}

export default enemyTarget;
