import Enemy from "../Class/Enemy";

/**
 *  Interface representing a database entry for an enemy
 * @property {Enemy} enemy - the constructor for creating the enemy
 * @property {number} min_lv - Minimum level at which the monster can be faced
 * @property {number} max_lv - Maximum level at which the monster can be faced
 */
interface DB_Enemy_Entry {
    enemy: Enemy;
    min_lv: number;
    max_lv: number;
}

export default DB_Enemy_Entry;