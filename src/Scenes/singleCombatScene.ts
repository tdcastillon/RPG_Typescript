import Combat from "../Combat/Combat";
import initSingleFight from "../Combat/initSingleFight";
import Enemy from "../Enemy/Class/Enemy";
import Party from "../Party/Party";

async function singleCombatScene(party: Party) : Promise<boolean> {
    try {
        let enemies: Array<Enemy> = await initSingleFight(party);

        let fight: Combat = new Combat(party, enemies);
        fight.startFight();
        return true;
    } catch (error) {
        throw error; // Promise.reject(error);
    }
}

export default singleCombatScene;