import InitStats from "../../Stats/InitStats";
import Enemy from "./Enemy";

/**
 * @description Class representing a Slime enemy in the game
 * @extends Enemy
 */
class Slime extends Enemy {
  /**
   * @description Constructor for the Slime class
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

    super(stats, "Slime", 0.2);
  }
}

export default Slime;
