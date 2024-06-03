import Enemy from "../Enemy/Class/Enemy";
import pressContinue from "../Misc/pressContinue";
import waitTime from "../Misc/waitTime";
import Party from "../Party/Party";
import enemyTurn from "./enemyTurn";
import playerTurn from "./playerTurn";

/**
 * @description Class representing a combat scenario
 */
class Combat {
  /**
   * @description The user's party object
    * @private
  */
  private _party: Party | undefined = undefined;
  
  /**
   * @description Flag indicating whether the fight has ended
   * @private
  */
  private _enemyParty: Array<Enemy> = [];
  
  /**
   * @description Flag indicating whether the fight has ended
   * @private
  */
  private fightEnded: boolean = false;

  /**
    @description Constructor for the Fight class
    @param {Party} party - The user's party object
    @param {Array<Enemy>} [enemyParty = []] - An optional array of Enemy objects that corresponds to the enemy's party (defaults to an empty array)
  */

  constructor(party: Party, enemyParty: Array<Enemy> = []) {
    this._party = party;
    this._enemyParty = enemyParty;
  }

  /**
   * @description Checks if the fight has ended due to all enemies being defeated
   * @private
   * @returns {Promise<boolean>} True if the fight has ended, false otherwise
  */
  private async checkEndFight(): Promise<boolean> {
    let x = 0;
    this._enemyParty = this._enemyParty.filter(
      (enemy: Enemy) => enemy.getStats().getProperty("HP") >= 0
    );

    if (this._enemyParty.length == 0) {
      console.log("You won the fight");
      await pressContinue();
      return true;
    } else return false;
  }

  /**
   * @description Checks if all heroes in the party are alive
   * @private
   * @returns {boolean} True if all heroes are dead, false otherwise
  */
  private checkAliveParty(): boolean {
    let x = 0;
    if (this._party) {
        for (let i = 0; i < this._party.length; i++) {
            if (this._party[i].hero.getStats().getProperty("HP") <= 0)
                console.log(`${this._party[i].hero.getName()} at position ${x} is dead`);
            x++;
        }
        return x <= 0;
    }
    return false;
  }

  /**
   * @description Starts the combat scenario
   * @public
   * @returns {Promise<void>}
  */

  public async startFight(): Promise<void> {
    while (!this.fightEnded) {
      let party: Party = this._party as Party;
      let enemyParty: Array<Enemy> = this._enemyParty as Array<Enemy>;

      for (let i = 0; i < party.length; i++) {
        if (party[i].hero.getStats().getProperty("HP") > 0) {
          let isTurnEnd = false;
          while (!isTurnEnd)
            [this.fightEnded, isTurnEnd] = await playerTurn(i, party, enemyParty)
          if (this.fightEnded) break;
          this.fightEnded = await this.checkEndFight();
          if (this.fightEnded) break;
        }
      }

      if (this.fightEnded) break;

      for (let i = 0; i < enemyParty.length; i++)
        await enemyTurn(i, enemyParty, party);

      this.fightEnded = this.checkAliveParty();
      if (this.fightEnded) break;
    }
  }
}

export default Combat;
