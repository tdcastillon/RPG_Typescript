import Drop from "../Interface/Drops";

function checkIfDrop(drop: Drop) : boolean {
    let drop_chance = drop.chances * 100;
    let random = Math.floor(Math.random() * 100);
    return random <= drop_chance;
}

export default checkIfDrop;