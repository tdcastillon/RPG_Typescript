import Enemy from "../Class/Enemy";
import DB_Enemy_Entry from "../Interface/DB_Enemy_Entry";

function constructEnemy(enemy_entry: DB_Enemy_Entry, enemy_lv: number, i: number): Enemy {

    let name = enemy_entry.enemy.getName() + ` ${i}`;
    let enemy: Enemy = enemy_entry.enemy.createEnemy(enemy_entry.enemy.getBasedStats(), name, enemy_entry.enemy.multiplier);
    enemy.levelUp(enemy_lv);
    
    return enemy;
}

export default constructEnemy;
