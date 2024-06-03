import DB_Enemy_Entry from "../Interface/DB_Enemy_Entry";

/**
 * @description Gets the available entries for the enemies
 * @param {number} lv_medium - The medium level of the enemies
 * @returns {Array<DB_Enemy_Entry>} The available entries for the enemies
*/

function getAvalaibleEnties(lv_medium: number) : Array<DB_Enemy_Entry> {
    const db = require('../db');
    let avalaible_monsters: Array<DB_Enemy_Entry> = [];

    db.forEach((enemy_entry: DB_Enemy_Entry) => {
        if (enemy_entry.min_lv <= lv_medium && enemy_entry.max_lv >= lv_medium) {
            avalaible_monsters.push(enemy_entry);
        }
    });

    return avalaible_monsters;
}

export default getAvalaibleEnties;