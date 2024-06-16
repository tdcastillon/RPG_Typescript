import Job from "../Job/Class/Job";
import util from 'util';
import clc from "cli-color";
import GameEntity from "../Game/GameEntity";
import waitTime from "../Misc/waitTime";

/**
 * Class representing a hero in the game
 * @extends GameEntity
*/

class Hero extends GameEntity {
    /**
     *  The hero's job
     * @public
     */
    public _job: Job;
  
    /**
     *  Constructor for the Hero class
     * @param name The hero's name
     * @param startingJob The hero's starting job
     */

    constructor(name: string, startingJob: Job) {
      super(name, startingJob.getBasedStats(), startingJob.getAllStats());
      this._job = startingJob;
      console.log(`Welcome ` + clc.green(`${this.getName()}`) + ` ! You are a ` + clc.yellow(`${this._job.getName()}`) + `.`);
    }
  
    /**
     *  Custom inspect method for the hero, used for logging and debugging
     * @param depth The inspect depth
     * @param options The inspect options
     * @return A string representation of the hero
     */
    [util.inspect.custom](depth: any, options: any) {
      return clc.green(`${this.getName()}`) + ', a ' + clc.yellow(`${this._job.getName()}`) + ' of lv ' + clc.red(`${this.getStats().getProperty('LVL')}`);
    }
  
    /**
     *  Levels up the hero
     * @param new_level The new level
     */
    public levelUp(new_level: number) {
      this.getStats().levelUp(new_level, this._job.getMultiplier(), this.getBasedStats());
    }

    /**
     * Gain XP function
     * @param xp the xp gained by the entity
    */

    public async gainXP(xp: number){
      this.getStats().setProperty('EXP', this.getStats().getProperty('EXP') + xp);
      let full_exp = this.getStats().getProperty('FULL_EXP');
      if(this.getStats().getProperty('EXP') >= full_exp){
          this.getStats().setProperty('EXP', this.getStats().getProperty('EXP') - full_exp);
          this.levelUp(this.getStats().getProperty('LVL') + 1);
          console.log(`Congratulations ${this.getName()} ! You are now level ${this.getStats().getProperty('LVL')} !`);
          waitTime(2)
      }
  }
  
    /**
     *  Getter for the hero's name, with green coloring
     * @return The hero's name
    */
    public getName(): string {
      return clc.green(`${this._name}`);
    }
}

export default Hero;