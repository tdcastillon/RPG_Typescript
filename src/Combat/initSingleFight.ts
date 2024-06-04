import Enemy from "../Enemy/Class/Enemy";
import constructEnemy from "../Enemy/Function/constructEnemy";
import getAvalaibleEnties from "../Enemy/Function/getAvalaibleEntries";
import DB_Enemy_Entry from "../Enemy/Interface/DB_Enemy_Entry";
import Party from "../Party/Party";
import getMediumLvParty from "../Party/getMediumLvParty";

/**
 *  allow to init only a single fight
 * @param {Party} party - party of the user
 * @returns {Array<Enemy>} - returns an array of enemies
*/

async function initSingleFight(party: Party) : Promise<Array<Enemy>> {
    const lv_medium: number = getMediumLvParty(party);
    const min_lv: number = lv_medium == 1 ? 1 : Math.floor(0.8 * lv_medium);
    const max_lv: number = Math.floor(1.2 * lv_medium);
    const min_party: number = Math.max(1, party.length - 1);
    const max_party: number = party.length + 1;
    const enemy_party: number = Math.floor(Math.random() * (max_party - min_party + 1) + min_party);

    let enemies: Array<Enemy> = [];
    let avalaible_monsters: Array<DB_Enemy_Entry> = getAvalaibleEnties(lv_medium);

    for (let i = 0; i < enemy_party; i++) {
        const enemy_lv: number = Math.floor(Math.random() * (max_lv - min_lv + 1) + min_lv);
        let enemy_entry: DB_Enemy_Entry = avalaible_monsters[Math.floor(Math.random() * avalaible_monsters.length)];
        let enemy: Enemy = constructEnemy(enemy_entry, enemy_lv, i);
        enemies.push(enemy);
    }

    return enemies;
}

export default initSingleFight;