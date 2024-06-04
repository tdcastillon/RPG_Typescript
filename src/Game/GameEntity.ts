import Stats from "../Stats/Stats";

/**
 * Class representing a game entity with stats and a name
 */
class GameEntity {
    /**
     *  The entity's name
     * @public
     */
    public _name: string;
  
    /**
     * @public
     *  The entity's base stats
     */
    public _based_stats: Stats;
  
    /**
     *  The entity's current stats
     * @public
     */
    public _stats: Stats;
  
    /**
     * Constructor for the GameEntity class
     * @param name The entity's name
     * @param based_stats The entity's base stats
     * @param stats The entity's current stats
     */
    constructor(name: string, based_stats: Stats, stats: Stats) {
      this._based_stats = based_stats;
      this._stats = stats;
      this._name = name;
    }
  
    /**
     * Getter for the entity's base stats
     * @return The entity's base stats
     */
    getBasedStats(): Stats {
      return this._based_stats;
    }
  
    /**
     * Getter for the entity's current stats
     * @return The entity's current stats
     */
    getStats(): Stats {
      return this._stats;
    }
  
    /**
     * Getter for the entity's name
     * @return The entity's name
     */
    getName(): string {
      return this._name;
    }
  
    /**
     * Levels up the entity
     * @param new_level The new level
     * @param multiplier The level up multiplier
     */
    levelUp(new_level: number, multiplier: number) {
      this.getStats().levelUp(new_level, multiplier, this.getBasedStats());
    }
}

export default GameEntity;