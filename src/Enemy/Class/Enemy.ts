import Stats from "../../Stats/Stats";

import util from 'util';
import clc from "cli-color";
import InitStats from "../../Stats/InitStats";
import GameEntity from "../../Game/GameEntity";
import Drop from "../../DropSystem/Interface/Drops";

/**
 *  Class representing an enemy in the game
 * @extends GameEntity
 */
class Enemy extends GameEntity {

    private drops: Drop[] = [];

    /**
     *  Constructor for the Enemy class
     * @param {InitStats} stats - The initial stats for the enemy
     * @param {string} name - The name of the enemy
     * @param {number} [multiplier = 0.5] - The multiplier for leveling up (defaults to 0.5)
     */
    constructor(stats: InitStats, name: string, drops: Drop[], public multiplier: number = 0.5) {
      super(name, new Stats(stats), new Stats(stats));
      this.drops = drops;
    }

    /**
     * setDrops - sets the drops of the enemy
     * @param {Drop[]} drops - The drops of the enemy
    */

    public setDrops(drops: Drop[]) {
      this.drops = drops;
    }
  
    /**
     *  Levels up the enemy
     * @param {number} new_level - The new level for the enemy
     */
    
    public levelUp(new_level: number) {
      this._stats.setProperty("EXP", Math.floor(this._stats.getProperty("EXP") * (1 + (new_level - 1) * this.multiplier)));
      this.getStats().levelUp(new_level, this.multiplier, this.getBasedStats());
    }
  
    /**
     *  Gets the name of the enemy
     * @returns {string} The name of the enemy, colored red
     */
    
    public getName(): string {
      return clc.red(`${this._name}`);
    }

    /**
     *  Gets the drops of the enemy
     * @returns {Drop[]} The drops of the enemy
    */

    public getDrops(): Drop[] {
      return this.drops;
    }
  
    /**
     *  Creates a new enemy instance
     * @param {InitStats} stats - The initial stats for the enemy
     * @param {string} name - The name of the enemy
     * @param {number} [multiplier = 0.5] - The multiplier for leveling up (defaults to 0.5)
     * @returns {Enemy} A new enemy instance
    */
    
    public createEnemy(stats: InitStats, name: string,  drops: Drop[], multiplier: number = 0.5): Enemy {
      return new Enemy(stats, name, drops, multiplier);
    }
  
    /**
     *  Custom inspect method for the enemy
     * @param {any} depth - The depth of the inspection
     * @param {any} options - The inspection options
     * @returns {string} A string representation of the enemy
    */

    [util.inspect.custom](depth: any, options: any) {
      return clc.red(`${this.getName()}`) + ' of lv ' + clc.red(`${this.getStats().getProperty('LVL')}` + ' ' + (this.getStats().getProperty('HP') <= 0 ? ' (dead)' : '(' + String(this.getStats().getProperty('HP'))) + ' PV)');
    }

  }

export default Enemy;