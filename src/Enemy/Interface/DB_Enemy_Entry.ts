import Enemy from "../Class/Enemy";

/**
 * Interface representing a database entry for an enemy
 */
interface DB_Enemy_Entry {
    enemy: Enemy;
    min_lv: number;
    max_lv: number;
}

export default DB_Enemy_Entry;