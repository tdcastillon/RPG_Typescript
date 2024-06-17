import Slime from "./Enemies/Slime";
import DB_Enemy_Entry from "./Interface/DB_Enemy_Entry";

/**
 *  Database for the enemies
*/

const enemy_db : Array<DB_Enemy_Entry> = [
    {
        enemy: new Slime(),
        min_lv: 1,
        max_lv: 5
    }
];

module.exports = enemy_db;