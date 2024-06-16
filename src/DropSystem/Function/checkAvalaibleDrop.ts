import Enemy from "../../Enemy/Class/Enemy";
import Drop from "../Interface/Drops";

function checkAvalaibleDrop(enemy: Enemy): Drop[] {
    const drops = enemy.getDrops();
    const level = enemy.getStats().getProperty("LVL")
    const avalaibleDrops = drops.filter(drop => drop.level_min <= level && drop.level_max >= level);
    return avalaibleDrops;
}

export default checkAvalaibleDrop