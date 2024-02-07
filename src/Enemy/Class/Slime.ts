import InitStats from "../../Stats/InitStats";
import Enemy from "./Enemy";

class Slime extends Enemy {

  constructor() {
    let stats: InitStats = {
      HP: 14,
      MAX_HP: 14,
      MP: 8,
      MAX_MP: 8,
      ATK: 5,
      DEF: 5,
      MAT: 3,
      MDF: 3,
      EXP: 5,
      FULL_EXP: 10,
      LVL: 1,
    };
    super(stats, "Slime", 0.2);
  }
}

export default Slime;
