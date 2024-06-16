import Party from "../../Party/Party";
import Drop from "../Interface/Drops";
import clc from "cli-color";

function addDropToParty(drop: Drop, party: Party) {
    switch (drop.item) {
        case "Gold":
            party.money += drop.quantity;
            console.log("You drop " + clc.green(`${drop.quantity} gold` + "!"))
            break;
        default:
            break;
    }
}

export default addDropToParty;