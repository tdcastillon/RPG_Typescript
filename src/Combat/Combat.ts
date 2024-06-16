import fetchDrops from "../DropSystem/Function/fetchDrops";
import Enemy from "../Enemy/Class/Enemy";
import pressContinue from "../Misc/pressContinue";
import waitTime from "../Misc/waitTime";
import Party from "../Party/Party";
import partyLevelUp from "../Party/partyLevelUp";
import enemyTurn from "./enemyTurn";
import playerTurn from "./playerTurn";

/**
 *  Class representing a combat scenario
 */
class Combat {
  /**
   *  The user's party object
    * @private
  */
  private _party: Party | undefined = undefined;
  
  /**
   *  Flag indicating whether the fight has ended
   * @private
  */
  private _enemyParty: Array<Enemy> = [];
  
  /**
   *  Flag indicating whether the fight has ended
   * @private
  */
  private fightEnded: boolean = false;

  /**
     Constructor for the Fight class
    @param {Party} party - The user's party object
    @param {Array<Enemy>} [enemyParty = []] - An optional array of Enemy objects that corresponds to the enemy's party (defaults to an empty array)
  */

  constructor(party: Party, enemyParty: Array<Enemy> = []) {
    this._party = party as Party;
    this._enemyParty = enemyParty;
  }

  /**
   * Processes the dead enemies
   * @private
   * @param {Array<Enemy>} dead_enemies - The array of dead enemies
   */

  private async processDeadEnemies(dead_enemies: Enemy[], left_enemies: number) {

    let party = this._party as Party;

    for (const enemy of dead_enemies) {
      console.clear();
      await partyLevelUp(party, enemy.getStats().getProperty("EXP"));
      await fetchDrops(enemy, party);
    }

    if (left_enemies != 0)
      await pressContinue();
  }

  /**
   *  Checks if the fight has ended due to all enemies being defeated
   * @private
   * @returns {Promise<boolean>} True if the fight has ended, false otherwise
  */
  private async checkEndFight(): Promise<boolean> {

    let dead_enemies : Enemy[] = []

    this._enemyParty.forEach((enemy: Enemy) => {
      if (enemy.getStats().getProperty("HP") <= 0) {
        dead_enemies.push(enemy)
      }
    })

    this._enemyParty = this._enemyParty.filter(
      (enemy: Enemy) => enemy.getStats().getProperty("HP") > 0
    );

    await this.processDeadEnemies(dead_enemies, this._enemyParty.length)

    if (this._enemyParty.length == 0) {
      console.log("You won the fight");
      await pressContinue();
      return true;
    } else return false;
  }

  /**
   *  Checks if all heroes in the party are alive
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
   *  Starts the combat scenario
   * @public
   * @returns {Promise<void>}
  */

  public async startFight(): Promise<void> {
    while (!this.fightEnded) {
      let party: Party = this._party as Party;

      for (let i = 0; i < party.length; i++) {
        if (party[i].hero.getStats().getProperty("HP") > 0) {
          let isTurnEnd = false;
          while (!isTurnEnd)
            [this.fightEnded, isTurnEnd] = await playerTurn(i, party, this._enemyParty as Array<Enemy>)
          if (this.fightEnded) break;
          this.fightEnded = await this.checkEndFight();
          if (this.fightEnded) break;
        }
      }

      if (this.fightEnded) break;

      for (let i = 0; i < this._enemyParty.length; i++)
        await enemyTurn(i, this._enemyParty as Array<Enemy>, party);

      this.fightEnded = this.checkAliveParty();
      if (this.fightEnded) break;
    }
  }
}

export default Combat;
