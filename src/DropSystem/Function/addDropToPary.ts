import addItem from "../../Inventory/Function/addItem";
import EquipableItem from "../../Items/Class/EquipableItem";
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
            if (drop.item.getIsEquipable())
                for (let i = 0; i < drop.quantity; i++)
                    party.inventory.equipments.push(drop.item as EquipableItem)
            else
                addItem(party.inventory.items, drop.item, drop.quantity)
            console.log("You drop " + clc.green(`${drop.quantity} ${drop.item.getName()}` + "!"))
            break;
    }
    console.log('')
}

export default addDropToParty;