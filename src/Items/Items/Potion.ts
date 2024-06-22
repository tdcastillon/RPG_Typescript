/**
 * Class representing the Potion item in the game
 * @extends ConsumableItem
*/

import ConsumableItem from "../Class/ConsumableItem";

class Potion extends ConsumableItem {
    /**
     * constructor for the PotionItem class 
    */
   constructor() {
         super("Potion", "Heals 20 HP", 20, "HP", 50)
   }
}

export default Potion;