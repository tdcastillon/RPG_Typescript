import Enemy from "./Class/Enemy"
import Slime from "./Class/Slime";
import DB_Enemy_Entry from "./Interface/DB_Enemy_Entry";

const enemy_db : Array<DB_Enemy_Entry> = [
    {
        enemy: new Slime(),
        min_lv: 1,
        max_lv: 5
    }
];

module.exports = enemy_db;