import Enemy from "../Class/Enemy";
import DB_Enemy_Entry from "../Interface/DB_Enemy_Entry";

/**
 *  Constructs an enemy
 * @param {DB_Enemy_Entry} enemy_entry - The enemy entry from the database
 * @param {number} enemy_lv - The level of the enemy
 * @param {number} i - The index of the enemy
 * @returns {Enemy} The constructed enemy
*/

function constructEnemy(enemy_entry: DB_Enemy_Entry, enemy_lv: number, i: number): Enemy {

    let name = enemy_entry.enemy.getName() + ` ${i}`;
    let enemy: Enemy = enemy_entry.enemy.createEnemy(enemy_entry.enemy.getBasedStats(), name, enemy_entry.enemy.getDrops(), enemy_entry.enemy.multiplier);
    enemy.levelUp(enemy_lv);
    
    return enemy;
}

export default constructEnemy;
