import Enemy from "../Enemy/Class/Enemy";
import pressContinue from "../Misc/pressContinue";
import waitTime from "../Misc/waitTime";
import Party from "../Party/Party";
import enemyTurn from "./enemyTurn";
import playerTurn from "./playerTurn";

class Combat {
  private _party: Party | undefined = undefined;
  private _enemyParty: Array<Enemy> = [];
  private fightEnded: boolean = false;

  constructor(party: Party, enemyParty: Array<Enemy> = []) {
    this._party = party;
    this._enemyParty = enemyParty;
  }

  private async checkEndFight(): Promise<boolean> {
    let x = 0;
    console.log(this._enemyParty)
    this._enemyParty = this._enemyParty.filter(
      (enemy: Enemy) => enemy.getStats().getProperty("HP") > 0
    );

    if (this._enemyParty.length == 0) {
      console.log("You won the fight");
      await pressContinue();
      return true;
    } else return false;
  }

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

  public async startFight(): Promise<void> {
    while (!this.fightEnded) {
      let party: Party = this._party as Party;
      let enemyParty: Array<Enemy> = this._enemyParty as Array<Enemy>;

      for (let i = 0; i < party.length; i++) {
        if (party[i].hero.getStats().getProperty("HP") > 0) {
          this.fightEnded = await playerTurn(i, party, enemyParty)
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
