import Combat from "../Combat/Combat";
import initSingleFight from "../Combat/initSingleFight";
import Enemy from "../Enemy/Class/Enemy";
import Party from "../Party/Party";

/**
 * Load a scene for a single fight
 * 
 * @param party - The party of heroes
 * @returns {boolean}
 *  This function will start a single combat scene 
*/
async function singleCombatScene(party: Party) : Promise<boolean> {
    try {
        let enemies: Array<Enemy> = await initSingleFight(party);

        let fight: Combat = new Combat(party, enemies);
        await fight.startFight();
        return false;
    } catch (error) {
        throw error; // Promise.reject(error);
    }
}

export default singleCombatScene;