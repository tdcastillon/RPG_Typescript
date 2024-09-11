import Hero from "./Hero/Hero";
import StartJourney from "./Misc/startJourney";
import addHeroParty from "./Party/addHeroParty";
import GameLoop from "./Game/GameLoop";
import Party from "./Party/Party";
import addItem from "./Inventory/Function/addItem";
import WoodenSword from "./Items/Items/EquipableItem/Swords/WoodenSword";
import Potion from "./Items/Items/ConsumableItem/Potion";

const main = async () => {
    let party : Party = {
        length: 0,
        money:  0,
        inventory: {
            items: [],
            equipments: []
        }
    }

    let hero : Hero = await StartJourney()

    addHeroParty(hero, party)

    addItem(party.inventory.items, new Potion(), 2)
    party.inventory.equipments.push(new WoodenSword())
    party.inventory.equipments.push(new WoodenSword())
    GameLoop(party);
};

main();
