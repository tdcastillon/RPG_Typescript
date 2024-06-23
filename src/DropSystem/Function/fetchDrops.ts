import Enemy from "../../Enemy/Class/Enemy";
import Party from "../../Party/Party";
import Drop from "../Interface/Drops";
import addDropToParty from "./addDropToPary";
import checkAvalaibleDrop from "./checkAvalaibleDrop";
import checkIfDrop from "./checkIfDrop";

async function fetchDrops(enemy: Enemy, party: Party) {
    let avalaible_drops = checkAvalaibleDrop(enemy);

    avalaible_drops.forEach((drop: Drop) => {
        if (checkIfDrop(drop))
            addDropToParty(drop, party)
    })
}

export default fetchDrops;