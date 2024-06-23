import InitStats from "../../Stats/InitStats";
import Drop from "../../DropSystem/Interface/Drops";
import Enemy from "../Class/Enemy";
import Potion from "../../Items/Items/Potion";

/**
 *  Class representing a Slime enemy in the game
 * @extends Enemy
 */
class Slime extends Enemy {
  /**
   *  Constructor for the Slime class
   */
  constructor() {

    // initial stats for a Slime LV 1

    let stats: InitStats = {
      HP: 20,
      MAX_HP: 20,
      MP: 8,
      MAX_MP: 8,
      ATK: 8,
      DEF: 3,
      MAT: 3,
      MDF: 6,
      EXP: 5,
      FULL_EXP: 10,
      LVL: 1,
    };

    let drops: Drop[] = [
      {
        item: "Gold",
        quantity: 4,
        chances: 1,
        level_min: 1,
        level_max: 99
      },
      {
        item: new Potion(),
        quantity: 1,
        chances: 0.5,
        level_min: 1,
        level_max: 99
      }
    ]

    super(stats, "Slime", drops, 0.2);
  }
}

export default Slime;
