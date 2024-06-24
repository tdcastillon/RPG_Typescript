/**
 * Class representing the Potion item in the game
 * @extends ConsumableItem
*/

import ConsumableItem from "../Class/ConsumableItem";
import itemRange from "../Enum/itemRange";

class Potion extends ConsumableItem {
    /**
     * constructor for the PotionItem class 
    */
   constructor() {
         super("Potion", "Heals 20 HP", 5, "HP", 20, itemRange.SINGLE)
   }
}

export default Potion;